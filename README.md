This repo contains both the app code and helm code in their respective directories.


# Installation / Running

## Pre-requisites

Install helm,kubectl and minikube, build the docker image and push to the registry (here dockerhub) and also push the charts to the helm repository (here github)

## Repo Add

```sh
helm repo add ummar https://ummar-farook.github.io/helm/
```

## Install the app

```sh
cd app-code/helm/
helm install . --generate-name
```

## View the service in browser

Use the minikube feature to view the service in local

```sh
minikube service yunar-app-service
```