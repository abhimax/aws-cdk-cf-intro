#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
//import { AwsCdkCfIntroStack } from "../lib/aws-cdk-cf-intro-stack";
import { PhotosStack } from "../lib/photosStack";
import { Bucket } from "aws-cdk-lib/aws-s3";

const app = new cdk.App();
//new AwsCdkCfIntroStack(app, "AwsCdkCfIntroStack");
new PhotosStack(app, "PhotosStack");
