package controllers

import (
	"fmt"
	"strings"

	civo_pkg "github.com/kubesimplify/ksctl/api/provider/civo"

	"github.com/kubesimplify/ksctl/api/controllers/cloud"
	"github.com/kubesimplify/ksctl/api/controllers/kubernetes"
	"github.com/kubesimplify/ksctl/api/resources"
	cloudController "github.com/kubesimplify/ksctl/api/resources/controllers/cloud"
	"github.com/kubesimplify/ksctl/api/storage/localstate"
)

type KsctlControllerClient struct{}

func GenKsctlController() *KsctlControllerClient {
	return &KsctlControllerClient{}
}

func InitializeStorageFactory(client *resources.KsctlClient) (string, error) {
	switch client.Metadata.StateLocation {
	case "local":
		client.Storage = localstate.InitStorage()
	default:
		return "", fmt.Errorf("Currently Local state is supported!")
	}
	return "[ksctl] initialized storageFactory", nil
}

func (ksctlControlCli *KsctlControllerClient) Credentials(client *resources.KsctlClient) (string, error) {

	if client.Storage == nil {
		return "", fmt.Errorf("Initalize the storage driver")
	}

	switch client.Metadata.Provider {
	case "civo":
		err := civo_pkg.GetInputCredential(client.Storage)
		if err != nil {
			return "", err
		}
		return "[ksctl] Credential added", nil
	case "azure", "aws":
		return "", fmt.Errorf("Currently not supported!")
	default:
		return "", fmt.Errorf("Currently not supported!")
	}
}

func (ksctlControlCli *KsctlControllerClient) CreateManagedCluster(client *resources.KsctlClient) (string, error) {
	if client.Storage == nil {
		return "", fmt.Errorf("Initalize the storage driver")
	}

	if err := cloud.HydrateCloud(client, "create"); err != nil {
		return "", err
	}

	cloudResErr := cloud.CreateManagedCluster(client)
	if cloudResErr != nil {
		client.Storage.Logger().Err(cloudResErr.Error())
	}
	return "[ksctl] created managed cluster", nil
}

func (ksctlControlCli *KsctlControllerClient) DeleteManagedCluster(client *resources.KsctlClient) (string, error) {

	if client.Storage == nil {
		return "", fmt.Errorf("Initalize the storage driver")
	}

	showMsg := true
	if showMsg {
		fmt.Println(fmt.Sprintf(`🚨 THIS IS A DESTRUCTIVE STEP MAKE SURE IF YOU WANT TO DELETE THE CLUSTER '%s'
	`, client.ClusterName+" "+client.Region))

		fmt.Println("Enter your choice to continue..[y/N]")
		choice := "n"
		unsafe := false
		fmt.Scanf("%s", &choice)
		if strings.Compare("y", choice) == 0 ||
			strings.Compare("yes", choice) == 0 ||
			strings.Compare("Y", choice) == 0 {
			unsafe = true
		}

		if !unsafe {
			return "[ksctl] cancelled", nil
		}
	}

	if err := cloud.HydrateCloud(client, "delete"); err != nil {
		return "", err
	}
	cloudResErr := cloud.DeleteManagedCluster(client)
	if cloudResErr != nil {
		client.Storage.Logger().Err(cloudResErr.Error())
	}
	return "[ksctl] deleted managed cluster", nil
}

func (ksctlControlCli *KsctlControllerClient) SwitchCluster(client *resources.KsctlClient) (string, error) {
	if client.Storage == nil {
		return "", fmt.Errorf("Initalize the storage driver")
	}
	return "[ksctl] switched cluster", nil
}

func (ksctlControlCli *KsctlControllerClient) GetCluster(client *resources.KsctlClient) (string, error) {
	if client.Storage == nil {
		return "", fmt.Errorf("Initalize the storage driver")
	}

	var printerTable []cloudController.AllClusterData
	switch client.Metadata.Provider {
	case "civo":
		data, err := civo_pkg.GetRAWClusterInfos(client.Storage)
		if err != nil {
			return "", err
		}
		printerTable = append(printerTable, data...)
	case "azure", "aws", "local":
		return "", fmt.Errorf("Not yet implemtned")
	case "all":
		data, err := civo_pkg.GetRAWClusterInfos(client.Storage)
		if err != nil {
			return "", err
		}
		printerTable = append(printerTable, data...)
	}
	client.Storage.Logger().Table(printerTable)
	return "[ksctl] get clusters", nil
}

func (ksctlControlCli *KsctlControllerClient) CreateHACluster(client *resources.KsctlClient) (string, error) {

	if client.Storage == nil {
		return "", fmt.Errorf("Initalize the storage driver")
	}

	if err := cloud.HydrateCloud(client, "create"); err != nil {
		return "", err
	}

	kubernetes.HydrateK8sDistro(client)

	cloudResErr := cloud.CreateHACluster(client)
	if cloudResErr != nil {
		return "", cloudResErr
	}
	return "[ksctl] created HA cluster", nil
	// // Cloud done
	// var payload cloudController.CloudResourceState
	// payload, _ = client.Cloud.GetStateForHACluster(client.Storage)
	// // transfer the state
	// client.Distro.InitState(payload)
	//
	// // Kubernetes controller
	// kubernetes.ConfigureCluster(client)
}

func (ksctlControlCli *KsctlControllerClient) DeleteHACluster(client *resources.KsctlClient) (string, error) {

	if client.Storage == nil {
		return "", fmt.Errorf("Initalize the storage driver")
	}

	showMsg := true
	if showMsg {
		fmt.Println(fmt.Sprintf(`🚨 THIS IS A DESTRUCTIVE STEP MAKE SURE IF YOU WANT TO DELETE THE CLUSTER '%s'
	`, client.ClusterName+" "+client.Region))

		fmt.Println("Enter your choice to continue..[y/N]")
		choice := "n"
		unsafe := false
		fmt.Scanf("%s", &choice)
		if strings.Compare("y", choice) == 0 ||
			strings.Compare("yes", choice) == 0 ||
			strings.Compare("Y", choice) == 0 {
			unsafe = true
		}

		if !unsafe {
			return "[ksctl] approval cancelled", nil
		}
	}
	if err := cloud.HydrateCloud(client, "delete"); err != nil {
		return "", err
	}

	kubernetes.HydrateK8sDistro(client)

	cloudResErr := cloud.DeleteHACluster(client)
	if cloudResErr != nil {
		return "", cloudResErr
	}
	return "[ksctl] deleted HA cluster", nil
}
