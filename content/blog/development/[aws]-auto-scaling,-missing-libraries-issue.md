---
title: "[AWS] Auto-scaling, missing libraries issue"
date: 2021-04-05 16:04:74
category: development
thumbnail: { thumbnailSrc }
draft: true
---

## Issue

- tried to scale t2.micro > t2.2xlarge single instance
- when AWS instance auto scales, it terminates existing instance and create bigger one
    - which means I need to install `libraries` on new instance
    - so I tried changing it to single instance 
    - which threw me this `error`

        ```bash
        Auto Scaling group update progress: Failed to receive 1 resource signal(s) for the current batch. Each resource signal timeout is counted as a FAILURE.
        Updating Auto Scaling group named: [AUTO SCALING GROUP NAME] failed Reason: Received 0 SUCCESS signal(s) out of 1. Unable to satisfy 100% MinSuccessfulInstancesPercent requirement
        Service:AmazonCloudFormation, Message:Stack named '[STACK NAME]' aborted operation. Current state: 'UPDATE_ROLLBACK_IN_PROGRESS' Reason: null
        ```

## Troubleshooting

- single instance means `min 1 max 1` instance but changing instance types needs at least `max 2` instances
- so I decided to use auto scaling but with large instance
- also in ec2 instance option, I turned on `termination protection`

<br/>

---

<br/>

Reference

[https://stackoverflow.com/a/49723352](https://stackoverflow.com/a/49723352)


<br/>

<br/>
