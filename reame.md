Arduino: 1.8.9 (Windows 10), Board: "Arduino Uno WiFi"

ESP32BootROM.cpp:335:32: error: 'SerialNina' was not declared in this scope

 ESP32BootROMClass ESP32BootROM(SerialNina, NINA_GPIO0, NINA_RESETN);

                                ^~~~~~~~~~

sketch\ESP32BootROM.cpp:335:32: note: suggested alternative: 'Serial'

 ESP32BootROMClass ESP32BootROM(SerialNina, NINA_GPIO0, NINA_RESETN);

                                ^~~~~~~~~~

                                Serial

ESP32BootROM.cpp:335:44: error: 'NINA_GPIO0' was not declared in this scope

 ESP32BootROMClass ESP32BootROM(SerialNina, NINA_GPIO0, NINA_RESETN);

                                            ^~~~~~~~~~

ESP32BootROM.cpp:335:56: error: 'NINA_RESETN' was not declared in this scope

 ESP32BootROMClass ESP32BootROM(SerialNina, NINA_GPIO0, NINA_RESETN);

                                                        ^~~~~~~~~~~

exit status 1
'SerialNina' was not declared in this scope

This report would have more information with
"Show verbose output during compilation"
option enabled in File -> Preferences.
