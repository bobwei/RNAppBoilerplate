# RNAppBoilerplate

## Getting Started

```
yarn

yarn start

react-native run-ios
react-native run-android
```

## Init project with React Native and apply diff

### Create patch from boilerplate

```
export APP_NAME=YOUR_APP_NAME
export BOILERPLATE_APP_PATH=YOUR_BOILERPLATE_APP_PATH

git clone git@github.com:bobwei/RNAppBoilerplate.git
cd RNAppBoilerplate
git format-patch v0 --stdout > build/diff.patch
sed -i '' -- "s/RNAppBoilerplate/$APP_NAME/g" build/diff.patch
```

## Apply patch to initiated project

```
react-native init ${APP_NAME}
cd ${APP_NAME}

git am ${BOILERPLATE_APP_PATH}/build/diff.patch
```
