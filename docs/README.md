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

## Safety Instructions
When using the Theengs plug, please follow these safety guidelines to ensure proper operation and to prevent potential hazards:

a. Read and follow all instructions provided in this manual before using the Theengs plug.

b. The Theengs plug is designed for indoor use only. Do not use it outdoors or expose it to moisture, excessive heat, or direct sunlight.

c. Ensure that the electrical outlet, where the Theengs plug will be installed, is in good working condition and complies with local electrical codes.

d. Do not use the Theengs plug with devices that exceed its maximum load capacity, as specified in the product specifications.

e. Keep the Theengs plug and connected devices away from water, flammable materials, and sources of ignition.

f. Unplug the Theengs plug from the wall outlet before cleaning or performing any maintenance. Use a dry cloth to clean the Theengs plug, and avoid using harsh chemicals or abrasive materials.

g. Do not attempt to disassemble, repair, or modify the Theengs plug. Doing so may cause damage, void the warranty, and potentially create safety hazards.

h. In the event of a malfunction or suspected problem with the Theengs plug, unplug it immediately and contact customer support for assistance.

i. Keep the Theengs plug and its packaging materials out of reach of children and pets to avoid the risk of choking or injury.

j. Avoid using the Theengs plug with devices sensitive to power cycling or restarts, as unexpected interruptions in power supply may cause damage or malfunctions in such devices.

## Specifications
|Characteristic|Value or range|
|-|-|
|Power Supply|100-120VAC 60Hz|
|Max current|15A|
|Microcontroller|ESP32|
|WiFi Band|2.4 GHz|
|Protocol|MQTT|
|Operating Humidity|0%～95% (No condensation)|
|Operating Temperature| 0 ºC ~ 40 ºC / 32F ~ 104F|
|Storage Temperature| -10°C ~ 50°C / 14F ~ 122F|
|Dimensions	|103mm * 34.6mm * 61mm/4.05in * 1.37in * 2.4in|
|Usage| Indoor use only|
|Certification| UL Listed hardware E 60730-1|

## Warranty
The Theengs Plug hardware warranty is one year from the date of purchase. See details [here](https://shop.theengs.io/pages/limited-product-warranty)

The plug is delivered with firmware developed under [GPLv3 license](https://github.com/1technophile/OpenMQTTGateway/blob/development/LICENSE.txt), by using it, you accept the terms and conditions of this license.

## Compliance
The Theengs Plug hardware is UL Listed (E499341).

### FCC Compliance Statement
This device complies with Part 15 of the FCC Rules. Operation is subject to the following two conditions:

This device may not cause harmful interference.
This device must accept any interference received, including interference that may cause undesired operation.

The Theengs Plug contains FCC ID 2AC72-ESPWROOM32.

### Interference Warning
This equipment has been tested and found to comply with the limits for a Class B digital device, pursuant to Part 15 of the FCC Rules. These limits are designed to provide reasonable protection against harmful interference in a residential installation. This equipment generates, uses, and can radiate radio frequency energy and, if not installed and used in accordance with the instructions, may cause harmful interference to radio communications. However, there is no guarantee that interference will not occur in a particular installation. If this equipment does cause harmful interference to radio or television reception, which can be determined by turning the equipment off and on, the user is encouraged to try to correct the interference by one or more of the following measures:

* Reorient or relocate the receiving antenna.
* Increase the separation between the equipment and receiver.
* Connect the equipment into an outlet on a circuit different from that to which the receiver is connected.
* Consult the dealer or an experienced radio/TV technician for help.

### Changes or Modifications Warning
Changes or modifications not expressly approved by the party responsible for compliance could void the user's authority to operate the equipment.

## Miscellaneous

::: warning
Do not use OpenMQTTGateway's low power mode with Theengs Plug and firmware version 1.3.0.
:::
