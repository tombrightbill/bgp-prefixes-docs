---
title: 'iOS Setup Instructions (Manual)'
alwaysopen: true
weight: 1
---

{{% notice info %}} Note that if you were using 1.1.1.1 for Families in the mobile app, you will at first need to disable 1.1.1.1 for Families. You can disable it by going to Advanced -> Connection options -> DNS Settings -> 1.1.1.1 for Families -> And select 'None'. {{% /notice %}}

## Install the 1.1.1.1 mobile app

Install the 1.1.1.1 mobile app by visiting the [app store](https://itunes.apple.com/us/app/1-1-1-1-faster-internet/id1423538627) on your iOS device.

If you already have the app on your phone, make sure you have the latest version of the app and then skip to the next step.

![Install the 1.1.1.1 mobile app](/media/install-one-dot-app.png)

## Click on the menu button

After you open the 1.1.1.1 mobile app, click on the menu button on the top right corner.
![Click on the menu button](/media/click-on-menu.PNG)

## Click on Advanced

Click on 'Advanced' which is located under the 'Account' button.
![Click on Advanced](/media/click-on-advanced.PNG)

## Click on Connection options

Click on 'Connection options' which is located at the bottom of the screen right above 'Diagnostics'.
![Click on Connection options](/media/click-on-connection-options.PNG)

## Click on DNS Settings

Click on 'DNS Settings'. This will take you to the screen where you can configure Gateway for your 1.1.1.1 mobile app.
![Click on DNS Settings](/media/click-on-dns-settings.PNG)

## Enter unique id from Gateway

When you are on this screen on your phone, you will need to enter the unique subdomain of the location you created for your mobile phone.

1. Visit your teams dashboard to fetch the unique id from your location.
   ![Go to teams dash](/media/go-to-teams-dashboard.png)

2. Go to locations page to see the list of locations.
   ![Go to locations page](/media/go-to-locations-page.png)

3. Expand the location card for the location you want to associate your mobile device with. If you have only one location, expand that location card.
   ![Expand location card](/media/expand-location-card.png)

4. Get the subdomain of the DNS over HTTPS hostname. This is your unique id. In the example below, this id is: fix7p31bzg.
   ![Get unique subdomain](/media/unique-gateway-id.png)

5. Enter the subdomain inside the field **GATEWAY UNIQUE ID**
   ![Enter unique id](/media/enter-unique-id.PNG)

If 1.1.1.1 DNS, WARP or WARP+ was already enabled, the 1.1.1.1 app should be using Gateway now.
