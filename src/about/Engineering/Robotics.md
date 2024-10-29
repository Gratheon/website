# Robot Vendors

This is a list of brainstormed ideas on how to move frames to take photos to automate inspections:

## Positioning considered

[Move to side XY(Z)](https://www.notion.so/Move-to-side-XY-Z-844abdbbce8c4ea6b1121d0e7396d69f?pvs=21)

[Expand internally - move frame one-by-one](https://www.notion.so/Expand-internally-move-frame-one-by-one-aad6edfc74bc413d918f4032135a55ab?pvs=21)

[Move to side + raise up](https://www.notion.so/Move-to-side-raise-up-3e05773feeb04c81933414f69b6af737?pvs=21)

[Move down XY](https://www.notion.so/Move-down-XY-9aac9c341d74498bac5f1c3bc00b4a20?pvs=21)

[Expand internally - scissors style](https://www.notion.so/Expand-internally-scissors-style-c7653ca98bb04abcacee7f707109b39f?pvs=21)

## Hardware solution

We’re copy-pasting a solution by Júlia Torras Amat in the area of Biomedical Engineering Degree

![Screenshot 2023-11-15 at 22.04.35.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/ae92add2-be15-4b27-9ff8-2169bef21049/Screenshot_2023-11-15_at_22.04.35.png)

![Screenshot 2023-11-17 at 00.01.03.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/741c75d8-8710-40a7-891c-b189ef2f17c1/Screenshot_2023-11-17_at_00.01.03.png)

![Screenshot 2023-11-17 at 00.20.08.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/fc15e99b-5b81-4335-8623-60a492d89bbc/Screenshot_2023-11-17_at_00.20.08.png)

![Screenshot 2023-11-16 at 23.55.38.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/e63de189-d3e3-421a-9475-6eeca2b5ac0a/Screenshot_2023-11-16_at_23.55.38.png)

![Screenshot 2023-11-17 at 00.16.26.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/798edd76-0f70-4a43-baae-b077b99e7833/Screenshot_2023-11-17_at_00.16.26.png)

- Size
    - Beehive Box external size - h 285 mm, l 450 mm ja p 506 mm.
    - Estonian Frame size - 448
    - x 279 mm
    - So we need a linear actuator with a **travel of min 500mm**
- Side positioning
- How to open/close frames to keep hive air-tight sealed?
- How do we make sure that mechanism does not rust or get polluted with organic debri?
- Which motion mechanism is better for us, planetary vs linear?

## Stepper motor driver

Stepper motor drivers are electronic devices used to control and drive stepper motors. They serve as an interface between the control system (in this case the controller) and the stepper motor, providing the necessary signals and power to accurately control its movement.

When choosing the appropriate driver for the system, it must be done according to the current that must be delivered to the stepper motor to properly function. As it can be seen in Table 7 the stepper motors incorporated in the reviewed XYZ motorized positioning systems are Nema23 and Nema24, and these specific models require 2 and 2.8 A [66], respectively. Furthermore, the stepper motor driver allows to control the number of pulses required to perform a whole turn of the stepper motor, that is, it allows to fine-tune the precision of motion of the motor. The higher the number of pulses needed to perform a revolution, the larger the precision. This will translate in the minimum number of millimeters that the positioning system can move when performing a trajectory.

## Controller

[https://www.youtube.com/watch?v=idVcItHfGS4](https://www.youtube.com/watch?v=idVcItHfGS4)

## Relevant info

(page 38)

[Torras_Amat_Júlia_TFG.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/a8d93a70-2cb3-4900-8bda-b7cb55cd982d/Torras_Amat_Julia_TFG.pdf)

[TFG-I-1682.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/7ed8d376-7b61-40a2-b0fa-97e4940552f0/TFG-I-1682.pdf)

[**Yahboom 6 Axis Robot Arm**](https://www.notion.so/Yahboom-6-Axis-Robot-Arm-1236c7765b2e4524a88fee8281b1bc33?pvs=21)

![python script to connect to GPIO on raspberry pi](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/b889eaef-756c-4b3a-b5f8-699c97dfc0b1/Screenshot_2023-12-29_at_16.59.55.png)

python script to connect to GPIO on raspberry pi

![Raspberry-Pi-Pinout-Random-Nerd-Tutorials.webp](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/835d8d51-80cc-43aa-ba8b-134c3a514135/Raspberry-Pi-Pinout-Random-Nerd-Tutorials.webp)

![FE0B4TLKF6TQ13E.webp](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/df56b340-651e-4629-8028-34396050d70b/FE0B4TLKF6TQ13E.webp)