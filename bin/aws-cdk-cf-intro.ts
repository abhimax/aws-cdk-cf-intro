#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
//import { AwsCdkCfIntroStack } from "../lib/aws-cdk-cf-intro-stack";
import { PhotosHandlerStack } from "../lib/PhotosHandlerStack";
import { PhotosStack } from "../lib/PhotosStack";
import { BucketTagger } from "./Tagger";

const app = new cdk.App();
//new AwsCdkCfIntroStack(app, "AwsCdkCfIntroStack");
new PhotosStack(app, "PhotosStack");
new PhotosHandlerStack(app, "PhotosHandlerStack");
const tagger = new BucketTagger("level", "test");
cdk.Aspects.of(app).add(tagger);
