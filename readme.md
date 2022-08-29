#### Example:
```
https://github.com/sidpalas/devops-directive/blob/master/2021-08-15-docker-dev-environment/improved/docker-compose.yml
```

### To launch

```sh
    docker-compose up     
```

### To rebuild the image

```sh
    docker-compose up --build  
```



### Copy from image to host
```
    docker cp <containerId>:/file/path/within/container /host/path/target

    docker cp b18072456f88:/app/react/.  clone-from-image/
```


## SSH to container

```sh
        docker exec -it 674fd2f939e5 /bin/sh
        docker exec -it <container-ID> /bin/sh
```