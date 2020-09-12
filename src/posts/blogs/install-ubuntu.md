---
title: How I was nearly heart-broken by my laptop's trust issue
date: 2019-02-14
categories:
- tutorial
excerpt: I had a laptop.<br> Seems like happy story but guess what, it had Windows.
  Wouldn't have been worst, but it had only windows. Little inconvenient for me because
  I feel coding in and basically using Windows very tedious.
tags:
- tutorial
- ubuntu
- linux
description: This is the part of me
keywords:
- tech
- installing ubuntu
- dual boot
- acer
- trust problem
gallery:
- url: "/assets/images/posts/ubuntu3.jpg"
  image_path: "/assets/images/posts/ubuntu3.jpg"
  alt: Ubuntu installing
  title: Bcdedit
- url: "/assets/images/posts/ubuntu2e.jpg"
  image_path: "/assets/images/posts/ubuntu2e.jpg"
  alt: Ubuntu installing
  title: Bootloader
header:
  overlay_image: https://cn.opendesktop.org/img//hive/content-pre1/93173-1.jpg
  show_overlay_excerpt: false
  overlay_filter: "0"

---
Spoiler:  This is going to have happy ending.

I had a laptop.

Seems like happy story but guess what, it had Windows. Wouldn't have been worst, but it had only windows. Little inconvenient for me because I feel coding in and basically using Windows very tedious. It was my dad's laptop so I couldn't change the OS. After adapting for a month, I gave up. I decided to dual boot Ubuntu. With some fear of formatting everything as I had done the process long time ago, I uploaded all files on google drive. I was on UEFI mode. Here's how I did it. Its simple but don't miss out some things. \[ For newbie, google any nice tutorial for dual booting linux with windows.\]

* Made a bootable USB with PowerISO.
* Inserted pendrive, rebooted my laptop and presses F12. \[thats for selecting boot options in acer, may be different in yours\]

It directly opened Windows. I was upset for a minute, but then figured out I hadn't enabled F12 to direct boot options. I did it in the BIOS settings.<br>
Next time the menu showed up. But the USB didn't showed up in the boot options. Little frusted but did my Step 1 job again with rufus\[search on google for newbie\]. And I was happy with the result when in boot options Linux showed up.

* I selected Linux and Ubuntu setup started.

Usual ubuntu setup was done.

**But don't forget to make a separate EFI partition giving it 400MB or something like that if you are booting in UEFI mode. And select your hard drive name (not partition name) while selecting boot-loader installing path.**

The sad part was that after the setup finished it directly opened windows. I thought grub wasn't installed properly but it wasn't the case.

I wanted to make Linux boot-loader as default so I tried to do it using windows command prompt.

```shell
bcdedit set /path {{bootloader}} \EFI\ubuntu\grubx64.efi
```

It did worse. It enabled the corrupted file as default boot-loader. I restarted the laptop and it just got stuck after showing acer logo and rebooted. Now I messed up my dad's laptop with every time pressing F12 and selecting second option for opening windows. I wasn't ready to give up, not yet.

My power of withstanding the consequence led me to start over all process twice.

The sad part was, outcome was same.

I did a research for an hour and found the solution.

The problem was due to trust problem.

Just for your information, what we are going to do here is to add the UEFI settings file (it was generated while Ubuntu installation) among the trusted UEFI boots in your device. And we know, UEFI boot’s main aim is to provide security and since Secure Boot was not disabled (perhaps) the device did not intend to boot from the newly installed OS. Adding it as trusted, kind of whitelisting, will let the device boot from the Ubuntu UEFI file.

Now, select the UEFI file as trusted. By pressing enter the location will be shown to ubuntu's grub. Save and done.

The gloomy day was saved.

Update: I reset the supervisor password. The grub is still working.
