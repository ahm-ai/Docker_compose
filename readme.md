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