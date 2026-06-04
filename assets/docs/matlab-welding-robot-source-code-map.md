# MATLAB Welding Robot - Source Code Documentation (Extracted)

Date: 2026-05-18  
Source repository: https://github.com/John-A-Chen/MATLAB-Welding-Robot  
Portfolio slug: `matlab-welding-robot`

## Project Context

- Primary course: 41013 Industrial Robotics
- Reused/extended for: 41014 Sensors and Controls for Mechatronic Systems
- Video references:
  - https://youtu.be/RnitCm5TBhw
  - https://youtu.be/qjHxWVd3D6w
  - https://youtu.be/nlIlINuIPB4

## High-Level Codebase Map

The repository is a MATLAB robotics simulation workspace with 4 main asset groups:

1. Core orchestrator classes (`A2*.m`)
- `A2.m`
- `A230.m`
- `A2J2.m`
- `A2b.m`, `A2J.m` (variants)

2. Robot model definitions
- `UR3e.m`
- `KukaTitan.m`
- `NachiMZ04.m`
- `LinearNachiMZ04.m`
- `DobotMagician.m`
- `CookerTitan.m`

3. Motion-control and experiment scripts
- `RMRC.m`, `RMRC2.m`, `RMRC3.m`, `rmrc4.m`, `rmrc5.m`, `RMRCcircularPath.m`
- `A1mess.m`, `A1mess2.m`, `a1mess3.m`, `a1mess4.m`
- `A2mess.m`, `a2mess2.m`
- `kukaColisionGuy.m`, `ElipsoidOnRobot*.m`

4. Geometry/media assets
- 57 `*.ply` files (robot links, fixtures, environment parts)
- 6 `*.jpg` files and supporting textures

## Main Entry Points

### `A2.m`

Main dual-robot UI/controller class with:
- environment setup (`setupEnvironment`)
- mode UI (`startUI`)
- free-joint control sliders (`freeControl`, `updateJoints`)
- sequence mode (`sequence` -> `RMRCwelding`)
- path placement UI (`pathPlacement`, `updatePath`, `play`)
- joystick control mode (`controller`, `vrjoystick`)
- E-stop/back behavior (`eStop`)
- ellipsoid-based obstacle checks (`defineObstacle`, `elipsoidOnRobotUR3e`, `elipsoidOnRobotTitan`)

### `A230.m`

A close variant of `A2.m` with similar architecture and a `rmrc5` trajectory routine. Includes DLS-style Jacobian inversion patterns for both UR3e and Titan branches.

### `A2J2.m`

Lightweight dual-robot class variant that includes obstacle initialization and `rmrc5` sequence flow. Useful as a simpler branch for debugging and demonstrations.

## Control and Kinematics Approach

Observed implementation patterns in the main files:

- inverse kinematics initialization via `ikcon`
- Jacobian-based velocity mapping via `jacob0`
- resolved motion rate control (RMRC) loops over waypoints
- damped least squares near low manipulability
- piecewise/circular path generation with `lspb`
- orientation handling with roll-pitch-yaw transforms

## Collision/Obstacle Strategy

Collision logic is approximated using transformed point clouds and ellipsoid tests:

- point sets are transformed through each link frame
- algebraic ellipsoid distance is computed
- points with `distance < 1` are treated as inside obstacle volumes

This is used as a practical collision-proxy workflow for assignment simulation speed.

## Sensors and Controls Crossover (41014)

`VideoServoingLab8.m` contains image-based visual servoing study code:

- central camera model creation (`CentralCamera`)
- target feature tracking in image plane
- visual Jacobian evaluation (`visjac_p`)
- camera-velocity to joint-velocity conversion through robot Jacobian inversion

This aligns with the repository being reused for sensor/control coursework beyond pure welding path demos.

## Video Transcript Notes

Transcript extraction status (API attempt on 2026-05-18):

- `RnitCm5TBhw`: transcript available
- `nlIlINuIPB4`: transcript available
- `qjHxWVd3D6w`: captions disabled, transcript unavailable via API

Recovered transcript themes include:
- safety motivation for robotic welding
- KR1000 heavy-workpiece handling + UR3e welding role split
- inverse kinematics + RMRC framing
- GUI/manual control + joystick-based Cartesian control
- hand-eye calibration and visual-servoing explanation (sensor/control side)

## Current Gaps (Repo Hygiene)

The repository currently has no top-level README and includes many parallel script iterations, making onboarding harder than necessary.

Recommended cleanup pass:

1. Add `README.md` with a clear run order (`A2` / `A230` / `A2J2`) and dependency list.
2. Move legacy iterations into `archive/` and keep canonical files in `src/`.
3. Group robot models into `models/`, controllers into `controllers/`, demos into `demos/`, experiments into `experiments/`.
4. Keep media/PLY references stable after folder moves (or add path helpers).

## Notes

This document is an extracted source map intended for portfolio documentation and repo cleanup planning. It reflects files visible in the checked-out repository on 2026-05-18.
