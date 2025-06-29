#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
//import { AwsCdkCfIntroStack } from "../lib/aws-cdk-cf-intro-stack";
import { PhotosStack } from "../lib/photosStack";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { PhotosHandlerStack } from "../lib/PhotosHandlerStack";

const app = new cdk.App();
//new AwsCdkCfIntroStack(app, "AwsCdkCfIntroStack");
new PhotosStack(app, "PhotosStack");
new PhotosHandlerStack(app, "PhotosHandlerStack");
