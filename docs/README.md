## All-in-One Smart Plug, Easy Setup Guide

Discover the **Theengs Plug**, a smart plug, BLE gateway, and energy meter in one device. This guide will help you quickly connect your plug to an MQTT broker.

1. **Plug it in**: Plug the device into an outlet. An orange LED will turn on steadily.
<p align="left">
  <img src="./img/Theengs-plug01-orange.png">
</p>

2. **Connect to WiFi**: On your smartphone, search for a WiFi network starting with `OMG_`.
<p align="left">
  <img src="./img/Theengs-plug01-wifi.png">
</p>

3. **Enter the password**: Click on the network and enter the last 8 digits of the device's MAC address as the password (the MAC address is printed on the side of the device). For example, if the MAC address is `409151234678`, the password will be `51234678`.

4. **Access the setup page**: A webpage may pop up automatically. If not, click on the gear icon next to the WiFi network.
<p align="left">
  <img src="./img/Theengs-plug01-wifi-manage-gear.png">
</p>
1. Then click on "Manage router".
<p align="left">
  <img src="./img/Theengs-plug01-wifi-manage-router.png">
</p>

::: tip
If your smartphone disconnects from the plug's WiFi network and reconnects to your main WiFi, "forget" your main WiFi to maintain a stable connection with the plug. After configuration, reconnect to your main WiFi. If the configuration portal doesn't appear, access it at `192.168.4.1` in your web browser.
:::

5. **Configure WiFi**: Click on "Configure Wifi".
<p align="left">
  <img src="./img/Theengs-plug01-wifi-manage-configure.png">
</p>

6. **Enter your settings**: Fill in the following required details:
* Your WiFi Access Point (SSID)
* Your WiFi password (Password)
* Your MQTT server
* Your MQTT port

Optionally, adjust the following settings if needed:
* MQTT user
* MQTT password
* Secure connection and certificates (if required)
* Gateway name
* Base topic
* Over The Air (OTA) password
<p align="left">
  <img src="./img/Theengs-plug01-wifi-manage-parameter.png">
</p>

7. **Save**: Click on Save.

When connected, the gateway LED should turn green and blink blue during scanning.
<p align="left">
  <img src="./img/Theengs-plug01-green.png">
</p>

For further integration with a Home Automation Controller, refer to the [OpenMQTTGateway documentation](https://docs.openmqttgateway.com/use/ble.html).

::: tip
To reset the parameters, press and hold the button for over 30 seconds until the orange LED turns steady. The WiFi configuration portal will then be available (step 2).
:::

For assistance or support, email: [florian@theengs.io](mailto:florian@theengs.io).

::: warning
Do not use OpenMQTTGateway's low power mode with Theengs Plug and firmware version 1.3.0.
:::
