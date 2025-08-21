docker buildx build --platform linux/amd64  -t my-profile:v1.0.0  --load .

docker tag [ImageId] crpi-raak7dkqy2f2trfd.cn-beijing.personal.cr.aliyuncs.com/longanz/my-profile:v1.0.0

docker push crpi-raak7dkqy2f2trfd.cn-beijing.personal.cr.aliyuncs.com/longanz/my-profile:v1.0.0

docker pull crpi-raak7dkqy2f2trfd.cn-beijing.personal.cr.aliyuncs.com/longanz/my-profile:v1.0.0

docker run --name my-profile -e TZ=Asia/Shanghai -p 8888:3000 -d crpi-raak7dkqy2f2trfd.cn-beijing.personal.cr.aliyuncs.com/longanz/my-profile:v1.0.0