---
home: true
heroText: Theengs plug quick start guide
heroImage: logo-Theengs.png
tagline: Smart plug, manufacturer agnostic BLE gateway and energy meter in one device.
---

[**Theengs Plug**](https://shop.theengs.io/products/theengs-plug-smart-plug-ble-gateway-and-energy-consumption) connects to an MQTT broker to be controlled and to push Bluetooth Low Energy sensors informations and power consumption.

1. Plug the device into an outlet, a steady orange LED will switch ON.
1. From your smartphone do a Wifi search and look for a network starting by `OMG_`
<p align="left">
  <img src="./img/Theengs-plug01-wifi.png">
</p>
1. Click on this network and enter the 8 last digits of the device MAC address, the device MAC address is printed on the side of it.
Example for a MAC address `409151234678` the Wifi password will be `51234678`
1. Depending on your smartphone a webpage will popup, if it doesn't pop up, click on the gear at the right of the Wifi netowrk 
<p align="left">
  <img src="./img/Theengs-plug01-wifi-manage-gear.png">
</p>
1. and click on "Manage router"
<p align="left">
  <img src="./img/Theengs-plug01-wifi-manage-router.png">
</p>
1. The web page will appear, click on "Configure Wifi"
<p align="left">
  <img src="./img/Theengs-plug01-wifi-manage-configure.png">
</p>
1. Enter the following parameters:
* Select your Wifi Access Point (SSID) - compulsory
* Enter your wifi password (Password) - compulsory
* Enter your mqtt server - compulsory
* Enter your mqtt port - compulsory
* Enter your mqtt user - optional
* Enter your mqtt password - optional
* Select if your broker requires a secure connection, if yes you will need to copy and paste the certificates on the next fields
* Modify the gateway name if you need
* Modify the base topic if you need
<p align="left">
  <img src="./img/Theengs-plug01-wifi-manage-parameter.png">
</p>
8. Click on Save

Once connected properly the gateway LED should be green and blink blue when scanning.

To use and integrate the plug with an Home Automation Controller you can switch to [OpenMQTTGateway documentation](https://docs.openmqttgateway.com/use/ble.html)

::: tip
If you are encountering issue with the plug, you can contact the support at the following email: [support@theengs.io](mailto:support@theengs.io)
:::