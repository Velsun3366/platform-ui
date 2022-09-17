#!/bin/sh
# commons
cd ./packages/commons
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# mp
cd ../../packages/mp
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# mobile
cd ../../packages/mobile
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# wap
cd ../../packages/wap
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# webapp
cd ../../packages/webapp
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# root
cd ../../
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
#
pnpm install
