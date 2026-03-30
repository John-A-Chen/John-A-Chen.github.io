// Update the URLs, images, and text below with your real project material.
export const projects = [
  {
    slug: "warman-attempts",
    featured: true,
    title: "Warman Attempts",
    subtitle:
      "A process-focused archive of repeated Warman challenge attempts across CAD, code, prototyping, assembly, and post-mortem review.",
    year: "2022-2025",
    status: "Ongoing archive",
    projectType: "Solo",
    tags: ["Robotics", "Competition", "CAD", "Iteration", "Documentation"],
    thumbnail: "assets/images/projects/warman-attempts/overview.svg",
    heroImage: "assets/images/projects/warman-attempts/assembly.svg",
    summary:
      "An honest record of design iterations, subsystem experiments, missed assumptions, and the practical lessons that came out of repeated Warman challenge builds.",
    overview: [
      "Warman Attempts is intentionally framed as a working archive rather than a polished competition recap. The value of the project is in the sequence of attempts: each concept, CAD package, control approach, and fabrication decision captures what changed from one iteration to the next.",
      "Instead of hiding weak ideas or failed assemblies, the project page is designed to show them clearly. That includes early mechanisms that looked promising in CAD but created avoidable complexity in assembly, control code that was technically functional but too brittle for event pressure, and packaging choices that made maintenance harder than it needed to be."
    ],
    problem: [
      "Design-build competitions compress concept generation, fabrication, programming, and testing into a short, high-pressure cycle. That makes it easy to lose important lessons once the deadline passes.",
      "This project exists to preserve those lessons in a way that is more useful than a final photo dump. The problem being solved is not just the competition task itself. It is also how to improve the engineering process from one attempt to the next."
    ],
    role: [
      "Mechanical concept generation and CAD packaging",
      "Rapid prototyping and assembly planning",
      "Subsystem debugging and post-build review",
      "Documentation of design decisions, failures, and next-step improvements"
    ],
    process: [
      {
        title: "Concept selection under uncertainty",
        body:
          "Multiple concepts were sketched and compared before any detailed CAD work. The main tradeoff was between ambitious scoring mechanisms and a chassis/layout that could be built, tuned, and repaired quickly."
      },
      {
        title: "CAD-first packaging and subsystem isolation",
        body:
          "Assemblies were broken into smaller design blocks so mounting, belt paths, roller locations, and access for maintenance could be evaluated before fabrication. This reduced guesswork, but it also exposed where overcomplication was creeping in."
      },
      {
        title: "Prototype-driven debugging",
        body:
          "Printed parts and quick fixtures were used to validate geometry and reveal assembly issues early. Several ideas were abandoned after hands-on testing showed poor stiffness, awkward serviceability, or more alignment sensitivity than expected."
      },
      {
        title: "Post-attempt review",
        body:
          "After each attempt, the project archive was updated with specific lessons rather than vague reflections. The emphasis was on what would actually change next time: packaging, simplicity, tolerance strategy, control robustness, and documentation quality."
      }
    ],
    technicalHighlights: [
      {
        title: "Design decisions tied back to serviceability",
        body:
          "A consistent theme across attempts was that mechanisms that looked efficient in CAD often became difficult to access, tune, or replace in the real build. Service access became a technical requirement rather than an afterthought."
      },
      {
        title: "Failure analysis as design input",
        body:
          "Instead of treating failed prints, loose fits, or unstable mechanisms as isolated mistakes, the archive uses them as concrete evidence for changing geometry, stack-ups, fastener strategy, and assembly sequence."
      },
      {
        title: "Documentation structure improved with each cycle",
        body:
          "Folders, screenshots, drawings, and commit history were progressively organised so future attempts could start from a clearer baseline rather than rebuilding context from memory."
      }
    ],
    tools: [
      "SolidWorks",
      "Fusion 360",
      "Onshape",
      "GitHub",
      "3D printing",
      "Hand tools and workshop fabrication"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/Warman-Attempts",
      cad: "https://github.com/John-A-Chen/Warman-Attempts/tree/main/cad",
      drawings: "https://github.com/John-A-Chen/Warman-Attempts/tree/main/drawings",
      print: null,
      docs: "https://github.com/John-A-Chen/Warman-Attempts/tree/main/docs",
      media: "https://github.com/John-A-Chen/Warman-Attempts/tree/main/renders"
    },
    gallery: [
      {
        src: "assets/images/projects/warman-attempts/overview.svg",
        alt: "Concept overview board for Warman Attempts",
        caption: ""
      },
      {
        src: "assets/images/projects/warman-attempts/assembly.svg",
        alt: "Assembly and packaging view for Warman Attempts",
        caption: "Assembly-focused view emphasising packaging, access, and prototype fit-up."
      },
      {
        src: "assets/images/projects/warman-attempts/diagnostics.svg",
        alt: "Diagnostics and lessons-learned layout for Warman Attempts",
        caption: ""
      }
    ],
    lessonsLearned: [
      "Simpler mechanisms with better maintenance access usually outperformed more ambitious concepts that were hard to tune under time pressure.",
      "CAD confidence is not the same as prototype confidence. Real assembly revealed fastening, stiffness, and access problems that were easy to miss on-screen.",
      "Post-event documentation is only useful if it is specific enough to change the next design cycle."
    ],
    futureWork: [
      "Convert the archive into a more formal year-by-year attempt log with clearer subsystem comparisons.",
      "Add measured test notes and controlled performance comparisons for future mechanisms.",
      "Develop a stronger reusable architecture for chassis mounting, wiring, and service access."
    ],
    relatedProjects: ["test-bench-vehicle", "robo-arm"]
  },
  {
    slug: "mecanum-wheel-study",
    featured: true,
    title: "Mecanum Wheel Study",
    subtitle:
      "An open-source study into low-cost, 3D-printable mecanum wheels aimed at making holonomic robotics more accessible to students and hobbyists.",
    year: "2025",
    status: "Open study",
    projectType: "Solo",
    tags: ["Robotics", "3D Printing", "Mechanisms", "Open Source", "CAD"],
    thumbnail: "assets/images/projects/mecanum-wheel-study/hero.svg",
    heroImage: "assets/images/projects/mecanum-wheel-study/rollers.svg",
    summary:
      "A printable mecanum wheel study centred on affordability, manufacturability, tolerance control, and educational clarity rather than chasing a premium industrial design.",
    overview: [
      "Commercial mecanum wheels can be expensive and hard to justify for student or hobby robotics projects. This study explores whether a lower-cost, mostly printable wheel can still be useful for education, experimentation, and early platform development.",
      "The work focuses on the geometry and manufacturing realities that matter for small-scale access: roller alignment, bearing support, print orientation, part count, assembly repeatability, and how much tolerance variation the design can tolerate before performance degrades noticeably."
    ],
    problem: [
      "Holonomic drivetrains are attractive for robotics education because they create immediately interesting motion behaviour, but the hardware cost often becomes the barrier.",
      "The challenge was to design a wheel that is open, printable, and realistic to build with common student-level tools while still making the engineering tradeoffs visible and worth learning from."
    ],
    role: [
      "CAD design of wheel architecture and roller geometry",
      "Tolerance strategy for printable parts and fastened assemblies",
      "Open-source documentation structure and file organisation",
      "Test planning for future validation rounds"
    ],
    process: [
      {
        title: "Geometry study",
        body:
          "The wheel started as a geometry problem: roller angle, hub packaging, bearing support, and how to preserve consistent contact while keeping the design printable in smaller machines."
      },
      {
        title: "Tolerance-aware redesign",
        body:
          "Early assumptions around nominal dimensions were revised to account for print variability, fastener clearances, and assembly friction. The design intentionally moved toward features that were more forgiving in student-level printing conditions."
      },
      {
        title: "Educational packaging",
        body:
          "The repository structure and case-study framing were treated as part of the project. The goal was not only to publish files, but to make the wheel understandable and reproducible for others."
      }
    ],
    technicalHighlights: [
      {
        title: "Roller and hub tolerancing",
        body:
          "A core focus was identifying where dimensional looseness was acceptable and where it would directly affect roller motion or wheel tracking. That led to a more deliberate split between cosmetic geometry and critical alignment features."
      },
      {
        title: "Affordability through part strategy",
        body:
          "The design tries to reduce specialised components and keep fabrication approachable. Lower cost only matters if the assembly remains teachable and realistically buildable."
      },
      {
        title: "Open-source value",
        body:
          "The wheel is framed as an engineering learning tool. The archive shows the reasoning behind design changes so future contributors can improve it rather than simply downloading an STL and guessing how it evolved."
      }
    ],
    tools: [
      "SolidWorks",
      "Fusion 360",
      "GitHub",
      "FDM 3D printing",
      "Calipers and fit-check testing"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/mecanum-wheel-study",
      cad: "https://github.com/John-A-Chen/mecanum-wheel-study/tree/main/cad",
      drawings: null,
      print: "https://github.com/John-A-Chen/mecanum-wheel-study/tree/main/print-files",
      docs: "https://github.com/John-A-Chen/mecanum-wheel-study/tree/main/docs",
      media: "https://github.com/John-A-Chen/mecanum-wheel-study/tree/main/media"
    },
    gallery: [
      {
        src: "assets/images/projects/mecanum-wheel-study/hero.svg",
        alt: "Mecanum wheel study hero render",
        caption: "System view showing the low-cost wheel architecture and educational positioning of the study."
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/rollers.svg",
        alt: "Roller geometry study for mecanum wheel",
        caption: "Roller geometry and contact orientation study used to reason about manufacturability and motion."
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/print-layout.svg",
        alt: "3D printing and tolerance layout for mecanum wheel components",
        caption: "Print and assembly layout highlighting tolerance-sensitive interfaces and expected print workflow."
      }
    ],
    lessonsLearned: [
      "Printable designs become much more useful when tolerance-sensitive features are intentionally isolated from cosmetic or low-risk geometry.",
      "Open-source accessibility is not only about publishing files. It also depends on how clearly the design intent, assembly path, and expected limitations are documented.",
      "For educational hardware, a slightly less optimised design can be better if it is easier to reproduce and explain."
    ],
    futureWork: [
      "Complete repeated print-and-test cycles using multiple printers and materials to validate the tolerance assumptions.",
      "Measure practical drivetrain behaviour under load to compare the printable design against commercial wheels.",
      "Add assembly documentation and troubleshooting notes targeted at first-time student builders."
    ],
    relatedProjects: ["test-bench-vehicle", "robo-arm"]
  },
  {
    slug: "robo-arm",
    featured: true,
    title: "Robo-Arm",
    subtitle:
      "A lightweight robotic arm exploring actuator efficiency through mechanical optimisation and four-bar linkage refinement from Gen 1 to Gen 2.",
    year: "2023-2024",
    status: "Gen 2 concept",
    projectType: "Solo",
    tags: ["Robotics", "Mechanisms", "Simulation", "CAD", "Optimisation"],
    thumbnail: "assets/images/projects/robo-arm/hero.svg",
    heroImage: "assets/images/projects/robo-arm/linkage.svg",
    summary:
      "A robotic arm project focused on reducing actuator load through better linkage design, cleaner geometry, and generation-over-generation refinement informed by analysis.",
    overview: [
      "Robo-Arm explores how much performance improvement can be extracted from mechanical layout before reaching for larger actuators or heavier structure. The project evolved from a first-generation arm into a second-generation concept that used a more deliberate four-bar linkage strategy and better geometry control.",
      "The central idea was to improve efficiency through mechanism design rather than brute force. That made the project a useful study in how kinematics, packaging, and structural assumptions affect actuator demand across the arm's working range."
    ],
    problem: [
      "Small robotic arms often become inefficient because their mechanism geometry pushes peak loads into awkward parts of the motion envelope, forcing larger actuators and heavier structure than necessary.",
      "This project looked at how linkage layout, mass distribution, and joint geometry could reduce those demands while keeping the design compact and practical to prototype."
    ],
    role: [
      "Mechanism design and CAD architecture",
      "Generation comparison between Gen 1 and Gen 2 concepts",
      "SolidWorks-based analysis and geometric iteration",
      "Documentation of design reasoning and next-step opportunities"
    ],
    process: [
      {
        title: "Baseline arm review",
        body:
          "The first-generation arm established the initial packaging constraints and exposed where the mechanism was asking too much from the actuator. Motion quality, leverage variation, and mass placement all indicated room for a deeper redesign."
      },
      {
        title: "Four-bar linkage refinement",
        body:
          "The second-generation concept reworked the arm around a more purposeful linkage arrangement. The goal was to move high-load regions into a more manageable operating envelope and smooth out the mechanical advantage through useful portions of travel."
      },
      {
        title: "Analysis-supported iteration",
        body:
          "SolidWorks studies were used as a decision aid rather than a decorative extra. Geometry changes were compared with a focus on load paths, range of motion, and whether the redesigned linkage genuinely improved the efficiency target."
      }
    ],
    technicalHighlights: [
      {
        title: "Mechanism optimisation before motor escalation",
        body:
          "A guiding principle of the project was that poor geometry should not be solved immediately with a larger actuator. Mechanical redesign came first, and that exposed much clearer opportunities for efficiency gains."
      },
      {
        title: "Gen 1 to Gen 2 comparison",
        body:
          "Comparing two generations side by side made the tradeoffs visible: packaging complexity versus performance, range-of-motion goals versus structural simplicity, and where the newer concept actually improved the design intent."
      },
      {
        title: "Simulation tied to design questions",
        body:
          "Analysis was used to answer concrete engineering questions about linkage behaviour and likely load reduction, not just to create screenshots. That kept the simulation work grounded in mechanism decisions."
      }
    ],
    tools: [
      "SolidWorks",
      "SolidWorks Motion / analysis tools",
      "CAD rendering",
      "GitHub",
      "3D printing"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/Robo-Arm",
      cad: "https://github.com/John-A-Chen/Robo-Arm/tree/main/cad",
      drawings: null,
      print: "https://github.com/John-A-Chen/Robo-Arm/tree/main/stl",
      docs: "https://github.com/John-A-Chen/Robo-Arm/tree/main/docs",
      media: "https://github.com/John-A-Chen/Robo-Arm/tree/main/renders"
    },
    gallery: [
      {
        src: "assets/images/projects/robo-arm/hero.svg",
        alt: "Robo-Arm full assembly render",
        caption: "Generation overview render showing the lightweight arm architecture and linkage placement."
      },
      {
        src: "assets/images/projects/robo-arm/linkage.svg",
        alt: "Four-bar linkage geometry study for Robo-Arm",
        caption: "Mechanism study focused on leverage management and actuator efficiency through the motion range."
      },
      {
        src: "assets/images/projects/robo-arm/gen-comparison.svg",
        alt: "Generation comparison between Gen 1 and Gen 2 Robo-Arm designs",
        caption: "Side-by-side comparison used to evaluate whether the revised geometry improved the design goals."
      }
    ],
    lessonsLearned: [
      "Mechanism refinement can materially reduce actuator demand when the geometry is doing the right work.",
      "Generation comparisons are most valuable when the design intent is explicit; otherwise it is too easy to compare shapes without comparing engineering outcomes.",
      "Simulation is only useful when it stays connected to a real design decision."
    ],
    futureWork: [
      "Prototype the Gen 2 concept physically and compare its behaviour against the analytical expectations.",
      "Add control integration and sensing to support more realistic motion experiments.",
      "Explore ROS-based integration for higher-level arm control and testing once the mechanical baseline is stable."
    ],
    relatedProjects: ["mecanum-wheel-study", "warman-attempts"]
  },
  {
    slug: "test-bench-vehicle",
    featured: false,
    title: "Test-Bench Vehicle",
    subtitle:
      "A compact experimental vehicle platform built for autonomous systems testing, modular sensor mounting, and rapid demonstration work.",
    year: "2024",
    status: "Prototype platform",
    projectType: "Project",
    tags: ["Autonomy", "Robotics", "Rapid Prototyping", "Testing", "Team Project"],
    thumbnail: "assets/images/projects/test-bench-vehicle/chassis.svg",
    heroImage: "assets/images/projects/test-bench-vehicle/sensors.svg",
    summary:
      "A fast-moving platform project built to get an early autonomous stack off the bench and onto a modular vehicle with practical mounting, access, and upgrade paths.",
    overview: [
      "The Test-Bench Vehicle was developed as a compact platform for early autonomous systems work and TechFest-style demonstration use. The emphasis was on rapid integration and iteration rather than a final polished vehicle architecture.",
      "That made packaging and modularity more important than cosmetic finish. The platform needed to accept sensors, tolerate rework, and provide a reasonable mechanical base for experimentation without becoming a long, fragile custom build."
    ],
    problem: [
      "Early autonomy experiments often stall because there is no practical hardware platform that is simple enough to build quickly but flexible enough to support changing sensors and electronics.",
      "This project addressed that gap by creating a vehicle that could be assembled fast, demonstrated publicly, and then reused for future integration work rather than treated as a one-off demo object."
    ],
    role: [
      "Vehicle architecture and modular platform thinking",
      "Mechanical packaging and mount planning",
      "Build notes and rapid integration support",
      "Documentation of prototype constraints and team-facing next steps"
    ],
    process: [
      {
        title: "Platform scoping for speed",
        body:
          "The project started by defining what had to be possible immediately: fast assembly, sensor mounting, stable demonstration behaviour, and room to iterate. That kept the first build intentionally compact and practical."
      },
      {
        title: "Mounting and access planning",
        body:
          "Sensor locations, electronics access, and structural attachment points were treated as first-order concerns. The platform needed to support change without forcing a full mechanical redesign every time a subsystem moved."
      },
      {
        title: "Prototype-first team context",
        body:
          "Because the vehicle existed in a broader team and demonstration context, the build notes focused on handoff value as much as design value. Clear mounts, clear access, and clear documentation mattered."
      }
    ],
    technicalHighlights: [
      {
        title: "Rapid platform architecture",
        body:
          "The chassis was designed as a test platform first. That meant accepting tradeoffs in finish and refinement so integration speed, modularity, and field-service practicality stayed high."
      },
      {
        title: "Sensor mounting as a design driver",
        body:
          "Rather than adding sensors at the end, their mechanical needs shaped the platform layout. This improved test readiness and made future autonomous work easier to stage."
      },
      {
        title: "Reusable prototype value",
        body:
          "A good test platform is useful even after the demo. The project was framed to keep the vehicle relevant for follow-on experiments rather than locking it to one event scenario."
      }
    ],
    tools: [
      "SolidWorks",
      "GitHub",
      "Rapid prototyping",
      "Workshop fabrication",
      "System integration testing"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/Test-Bench-Vehicle",
      cad: null,
      drawings: "https://github.com/John-A-Chen/Test-Bench-Vehicle/tree/main/drawings",
      print: null,
      docs: "https://github.com/John-A-Chen/Test-Bench-Vehicle/tree/main/build-notes",
      media: "https://github.com/John-A-Chen/Test-Bench-Vehicle/tree/main/photos"
    },
    gallery: [
      {
        src: "assets/images/projects/test-bench-vehicle/chassis.svg",
        alt: "Compact test-bench vehicle chassis view",
        caption: "Chassis view showing the vehicle as a modular autonomous systems test platform."
      },
      {
        src: "assets/images/projects/test-bench-vehicle/sensors.svg",
        alt: "Sensor mounting study for test-bench vehicle",
        caption: "Sensor mounting and electronics access study for fast iteration and public demonstration readiness."
      },
      {
        src: "assets/images/projects/test-bench-vehicle/build-notes.svg",
        alt: "Build notes and prototype workflow for test-bench vehicle",
        caption: "Build narrative board showing rapid development, team context, and likely future integration paths."
      }
    ],
    lessonsLearned: [
      "Test platforms benefit from being intentionally unfinished in the right places so they can absorb future integration work.",
      "Fast demonstration builds still need thoughtful access and mount planning if they are going to stay useful after the event.",
      "Team-facing documentation reduces friction when a prototype becomes shared infrastructure."
    ],
    futureWork: [
      "Expand the sensor stack and improve wiring/electronics integration for repeated autonomous experiments.",
      "Refine the platform into a more durable second-generation chassis while preserving mounting flexibility.",
      "Develop a cleaner validation workflow for perception, control, and field testing on the vehicle."
    ],
    relatedProjects: ["mecanum-wheel-study", "warman-attempts"]
  },
  {
    slug: "camera-study",
    featured: true,
    title: "Camera Study",
    subtitle:
      "A mechanical study of traditional film camera shutters and iris assemblies, rebuilt through CAD, prototypes, and tolerance-focused iteration.",
    year: "2024-2024",
    status: "Active mechanical study",
    projectType: "Solo",
    tags: ["Mechanisms", "CAD", "Iris Design", "Prototyping", "Documentation"],
    thumbnail: "assets/images/projects/camera-study/overview.svg",
    heroImage: "assets/images/projects/camera-study/assembly.svg",
    summary:
      "An open study documenting blade geometry, pivot placement, friction considerations, and actuation behaviour in mechanical iris systems inspired by film camera internals.",
    overview: [
      "Camera Study started as a curiosity project after inspecting a film camera and noticing the mechanical elegance of its articulated iris blade assembly. The goal was to recreate similar behaviour using modern CAD and fabrication methods while preserving the original mechanism logic.",
      "The repository is structured as an engineering journal: geometry experiments, interlocking blade studies, friction and clearance notes, and prototype outcomes including both successful and failed iterations."
    ],
    problem: [
      "Mechanical iris systems are visually simple but mechanically sensitive. Small changes in blade curvature, pivot location, or overlap can make motion unstable, sticky, or impossible to assemble repeatably.",
      "The project tackled how to design a working iris mechanism that can be understood, fabricated, and iterated by students using accessible tools."
    ],
    role: [
      "Mechanical decomposition of shutter and iris behaviour into CAD-ready constraints",
      "Blade geometry exploration and pivot path studies",
      "Prototype planning with tolerance and friction considerations",
      "Documentation of failures and revision rationale"
    ],
    process: [
      {
        title: "Reverse-engineering visual behaviour",
        body:
          "Initial work focused on observing how blade overlap and actuation rings produce smooth aperture changes. Notes and sketches were translated into repeatable CAD constraints."
      },
      {
        title: "Parametric blade and pivot iteration",
        body:
          "Blade profile, hole placement, and ring geometry were iterated to reduce binding and preserve motion continuity through opening and closing cycles."
      },
      {
        title: "Prototype-informed tolerance tuning",
        body:
          "The mechanism was repeatedly adjusted around real friction behaviour and assembly order, not only nominal CAD fit. This shifted the design toward more forgiving interfaces."
      }
    ],
    technicalHighlights: [
      {
        title: "Interlocking blade geometry",
        body:
          "The project maps how overlap depth, blade curvature, and pivot radius interact. Changes that looked minor in CAD often had large effects on physical actuation smoothness."
      },
      {
        title: "Actuation ring and pivot relationship",
        body:
          "Outer ring motion and blade pivot locations were treated as a coupled system, allowing aperture changes to remain consistent rather than lurching through parts of travel."
      },
      {
        title: "Practical friction management",
        body:
          "Print-induced roughness, pin clearances, and assembly preload were documented as first-order design inputs rather than post-build troubleshooting."
      }
    ],
    tools: [
      "SolidWorks",
      "Fusion 360",
      "3D printing",
      "Mechanical measurement tools",
      "GitHub documentation"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/Camera-Study",
      cad: "https://github.com/John-A-Chen/Camera-Study/tree/main/cad",
      drawings: null,
      print: "https://github.com/John-A-Chen/Camera-Study/tree/main/stl",
      docs: "https://github.com/John-A-Chen/Camera-Study/tree/main/docs",
      media: null
    },
    gallery: [
      {
        src: "assets/images/projects/camera-study/overview.svg",
        alt: "Camera Study mechanical overview board",
        caption: "Mechanism breakdown of iris blades, pivots, and ring actuation architecture."
      },
      {
        src: "assets/images/projects/camera-study/assembly.svg",
        alt: "Camera Study assembly and motion layout",
        caption: "Assembly-focused view highlighting blade interactions, sequence, and aperture behaviour."
      },
      {
        src: "assets/images/projects/camera-study/diagnostics.svg",
        alt: "Camera Study tolerance and diagnostics board",
        caption: "Iteration notes on friction, clearances, and geometry changes from prototype feedback."
      }
    ],
    lessonsLearned: [
      "Mechanical beauty often hides tight coupling between geometry and friction; both need deliberate engineering treatment.",
      "A mechanism that looks plausible in CAD can still fail in assembly order or physical motion if tolerance strategy is weak.",
      "Open, structured documentation makes future iterations faster and more rigorous."
    ],
    futureWork: [
      "Build a fully repeatable iris prototype with controlled aperture movement and reduced friction sensitivity.",
      "Compare behaviour across blade counts such as 5, 7, 9, and 12 to study smoothness versus complexity.",
      "Expand fabrication paths to include laser-cut and metal-backed variants."
    ],
    relatedProjects: ["cycloidial-study", "robo-arm"]
  },
  {
    slug: "johncar",
    featured: false,
    title: "JohnCar",
    subtitle:
      "An automotive engineering workbench repository for CAD parts, diagnostics, service notes, sensor experiments, and practical vehicle studies.",
    year: "2023-2026",
    status: "Ongoing archive",
    projectType: "Solo",
    tags: ["Automotive", "CAD", "Diagnostics", "Sensors", "Documentation"],
    thumbnail: "assets/images/projects/johncar/overview.svg",
    heroImage: "assets/images/projects/johncar/assembly.svg",
    summary:
      "A broad car-focused engineering archive that captures custom parts, maintenance notes, test scripts, and measurement workflows in one organised repository.",
    overview: [
      "JohnCar is intentionally not a single project. It is a central workshop repository that stores automotive experiments, practical fixes, custom components, and test findings that would otherwise be scattered across notes and local files.",
      "The repository supports continuity: when a repair, measurement, or prototype needs revisiting later, the CAD, notes, and test context are already structured and versioned."
    ],
    problem: [
      "Vehicle work often involves many small but valuable engineering tasks that do not justify separate repositories, which can make knowledge hard to retrieve.",
      "This archive solves that by grouping car-related work under a consistent structure so parts, diagnostics, and observations remain reusable."
    ],
    role: [
      "Repository architecture and taxonomy for mixed automotive work",
      "CAD and print-ready part studies for brackets, clips, and mounts",
      "Diagnostics and sensor experiment documentation",
      "Maintenance logging and measurement-driven troubleshooting"
    ],
    process: [
      {
        title: "Capture and organise",
        body:
          "Any car-related task with future value is captured, including part numbers, measurements, diagnostics output, photos, and CAD files."
      },
      {
        title: "Prototype and validate",
        body:
          "Custom parts and mounting concepts are modelled and tested with practical constraints such as fit, access, and serviceability."
      },
      {
        title: "Document for reuse",
        body:
          "Service notes and experiment outcomes are logged so repairs and upgrades can be repeated or improved with less guesswork."
      }
    ],
    technicalHighlights: [
      {
        title: "Mixed-discipline archive design",
        body:
          "The project combines mechanical CAD, electronics diagnostics, and test notes without losing navigability, which is critical for long-term utility."
      },
      {
        title: "Small-part engineering workflow",
        body:
          "Rapidly designed replacement clips, mounts, and fittings are documented with enough context to reprint or revise safely."
      },
      {
        title: "Measurement-first maintenance",
        body:
          "Disassembly notes, specs, and observations are treated like engineering data so decisions are traceable rather than memory-based."
      }
    ],
    tools: [
      "SolidWorks",
      "Fusion 360",
      "Python",
      "OBD-II tooling",
      "GitHub",
      "3D printing"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/JohnCar",
      cad: "https://github.com/John-A-Chen/JohnCar/tree/main/cad",
      drawings: null,
      print: "https://github.com/John-A-Chen/JohnCar/tree/main/stl",
      docs: "https://github.com/John-A-Chen/JohnCar/tree/main/docs",
      media: null
    },
    gallery: [
      {
        src: "assets/images/projects/johncar/overview.svg",
        alt: "JohnCar repository overview board",
        caption: "Archive layout for CAD parts, diagnostics notes, and service documentation."
      },
      {
        src: "assets/images/projects/johncar/assembly.svg",
        alt: "JohnCar component and mounting studies",
        caption: "Part design and fitment studies for practical automotive use."
      },
      {
        src: "assets/images/projects/johncar/diagnostics.svg",
        alt: "JohnCar diagnostics and maintenance documentation",
        caption: "Structured records for measurements, troubleshooting, and repeatable fixes."
      }
    ],
    lessonsLearned: [
      "A central archive for small engineering tasks creates compounding value over time.",
      "Structured documentation reduces repeat mistakes and speeds up future repairs and upgrades.",
      "Designing for serviceability is as important for small car parts as it is for larger systems."
    ],
    futureWork: [
      "Expand diagnostics scripts and telemetry experiments with cleaner logging workflows.",
      "Grow the printable part library with revision history and fitment notes.",
      "Add more formal benchmark studies for suspension and steering geometry observations."
    ],
    relatedProjects: ["test-bench-vehicle", "solid-connections"]
  },
  {
    slug: "cycloidial-study",
    featured: true,
    title: "Cycloidial Study",
    subtitle:
      "A SolidWorks-focused cycloidal drive project emphasising parametric geometry, manufacturing constraints, and transparent engineering documentation.",
    year: "2025-2025",
    status: "Parametric drive development",
    projectType: "Solo",
    tags: ["Transmission", "Cycloidal Drive", "SolidWorks", "Parametric Design", "Robotics"],
    thumbnail: "assets/images/projects/cycloidial-study/overview.svg",
    heroImage: "assets/images/projects/cycloidial-study/assembly.svg",
    summary:
      "A manufacturing-aware cycloidal reducer study built around equations, global variables, and repeatable CAD workflows for robotic actuator applications.",
    overview: [
      "Cycloidial Study explores how to build a robust cycloidal drive workflow in SolidWorks rather than relying on static geometry. The project treats ratio selection, eccentricity, pin count, and output interfaces as tunable parameters with clear traceability.",
      "The repository combines CAD, scripting support, docs, and references to turn cycloidal design into an understandable and modifiable engineering process."
    ],
    problem: [
      "Many cycloidal resources are either fixed examples or optimized for other CAD tools, making adaptation and learning harder for SolidWorks users.",
      "The project solves this by building a parameter-driven design base with manufacturing-aware assumptions and documentation that explains the tradeoffs."
    ],
    role: [
      "Parametric CAD architecture in SolidWorks",
      "Geometry and ratio control strategy using variables and equations",
      "Manufacturing-aware design choices for prints and fabricated components",
      "Documentation of assumptions, references, and next-stage validation plans"
    ],
    process: [
      {
        title: "Parameter and equation framework",
        body:
          "Core geometry was mapped into controllable variables so ratio and scale changes remain consistent and auditable."
      },
      {
        title: "CAD iteration under constraints",
        body:
          "Disc, pin, bearing, and output interfaces were iterated with attention to assembly order, fastener access, and realistic manufacturing paths."
      },
      {
        title: "Documentation and reference synthesis",
        body:
          "Design choices were supported with literature and comparative references to keep the project educational and technically grounded."
      }
    ],
    technicalHighlights: [
      {
        title: "SolidWorks-first parametric strategy",
        body:
          "The project demonstrates how to implement cycloidal theory directly into a SolidWorks workflow so geometry changes are fast and coherent."
      },
      {
        title: "Manufacturing-aware gearbox design",
        body:
          "Tolerance, fits, and fabrication practicality are integrated from the beginning instead of postponed until after geometry generation."
      },
      {
        title: "Engineering references embedded in workflow",
        body:
          "The repository includes literature context and assumptions, helping link CAD decisions to transmission theory and practical limitations."
      }
    ],
    tools: [
      "SolidWorks",
      "Python",
      "Excel",
      "GitHub",
      "Bambu Lab P1S (planned print validation)"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/CycloidialStudy",
      cad: "https://github.com/John-A-Chen/CycloidialStudy/tree/main/CAD",
      drawings: "https://github.com/John-A-Chen/CycloidialStudy/tree/main/Drawings",
      print: null,
      docs: "https://github.com/John-A-Chen/CycloidialStudy/tree/main/Docs",
      media: null
    },
    gallery: [
      {
        src: "assets/images/projects/cycloidial-study/overview.svg",
        alt: "Cycloidial Study design overview board",
        caption: "Parametric architecture for cycloidal geometry and ratio-driven CAD updates."
      },
      {
        src: "assets/images/projects/cycloidial-study/assembly.svg",
        alt: "Cycloidial Study assembly and packaging board",
        caption: "Reducer assembly packaging with manufacturing and fit considerations."
      },
      {
        src: "assets/images/projects/cycloidial-study/diagnostics.svg",
        alt: "Cycloidial Study validation and iteration board",
        caption: "Iteration log covering assumptions, expected failure points, and planned testing."
      }
    ],
    lessonsLearned: [
      "Parameter-driven modelling is most valuable when every variable has clear physical meaning and constraints.",
      "Transmission CAD quality improves significantly when assembly and manufacturing are considered from the first iteration.",
      "A transparent engineering log makes complex mechanism projects easier to debug and share."
    ],
    futureWork: [
      "Fabricate and test multiple drive variants to measure backlash, efficiency, and wear behaviour.",
      "Develop an integrated motor-mount and output interface for robotic joint experiments.",
      "Compare results against harmonic drive references for design trade-off benchmarking."
    ],
    relatedProjects: ["robo-arm", "camera-study"]
  },
  {
    slug: "solid-connections",
    featured: true,
    title: "Solid Connections",
    subtitle:
      "A multidisciplinary mechatronic systems project integrating mechanical design, custom PCB development, embedded firmware, and iterative validation.",
    year: "2025-2025",
    status: "Private repository, documented case study",
    projectType: "Project",
    tags: ["Mechatronics", "PCB Design", "Embedded Systems", "Integration", "Iteration"],
    thumbnail: "assets/images/projects/solid-connections/overview.svg",
    heroImage: "assets/images/projects/solid-connections/assembly.svg",
    summary:
      "A full-stack hardware project centered on co-design across enclosure CAD, Altium PCB revisions, firmware updates, and integration debugging.",
    overview: [
      "Solid Connections is a complete mechatronic workflow project covering mechanical design, electronics development, firmware implementation, and system-level integration. The strongest value is the documented iteration process across subsystem boundaries.",
      "The project demonstrates how professional hardware development is non-linear: schematic issues influence enclosure geometry, mechanical constraints impact layout, and firmware tuning reveals hardware assumptions."
    ],
    problem: [
      "Multidisciplinary prototypes often fail when subsystems are designed in isolation and only merged late in the process.",
      "This project addresses that by forcing co-design loops and treating design-rule checks, assembly fit, and debugging evidence as core engineering workflow."
    ],
    role: [
      "Mechanical subsystem architecture and enclosure iteration",
      "Custom PCB schematic and layout refinement in Altium",
      "Embedded firmware implementation and calibration adjustments",
      "Documentation of revision history and integration outcomes"
    ],
    process: [
      {
        title: "Subsystem co-design setup",
        body:
          "Mechanical, electrical, and firmware workstreams were developed together with shared constraints to prevent late-stage integration surprises."
      },
      {
        title: "Iterative PCB and enclosure alignment",
        body:
          "Multiple schematic and layout revisions were run alongside enclosure updates to resolve routing, mounting, and clearance issues."
      },
      {
        title: "Integration and validation loops",
        body:
          "Physical integration and firmware testing exposed assumptions, leading to repeated refinement in threshold logic, mounting geometry, and system packaging."
      }
    ],
    technicalHighlights: [
      {
        title: "Design-rule-driven electronics iteration",
        body:
          "DRC feedback and routing constraints were used systematically to clean schematic and PCB issues before final integration."
      },
      {
        title: "Mechanical-electrical coupling",
        body:
          "Mounting features, enclosure tolerances, and board placement were engineered together to improve assembly repeatability and robustness."
      },
      {
        title: "Structured iteration discipline",
        body:
          "The project captures revision decisions across CAD, PCB, and firmware to preserve engineering traceability and reduce repeated errors."
      }
    ],
    tools: [
      "SolidWorks",
      "Altium Designer",
      "C++ / embedded firmware",
      "Python",
      "GitHub",
      "System integration testing"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/Solid-Connections",
      cad: "https://github.com/John-A-Chen/Solid-Connections/tree/main/CAD",
      drawings: null,
      print: null,
      docs: "https://github.com/John-A-Chen/Solid-Connections",
      media: null
    },
    gallery: [
      {
        src: "assets/images/projects/solid-connections/overview.svg",
        alt: "Solid Connections system overview board",
        caption: "System architecture view across mechanical, electrical, and embedded subsystems."
      },
      {
        src: "assets/images/projects/solid-connections/assembly.svg",
        alt: "Solid Connections integration and packaging board",
        caption: "Integrated enclosure and PCB packaging with revision-driven hardware changes."
      },
      {
        src: "assets/images/projects/solid-connections/diagnostics.svg",
        alt: "Solid Connections validation and iteration board",
        caption: "Revision notes highlighting DRC cycles, firmware tuning, and subsystem debugging."
      }
    ],
    lessonsLearned: [
      "Hardware projects improve when subsystem boundaries are treated as design interfaces, not handoff points.",
      "PCB and enclosure problems are easier to solve when revision notes are explicit and traceable.",
      "Iteration is a core engineering method, not evidence of failure."
    ],
    futureWork: [
      "Clean and publish a public-safe subset of the project artefacts where possible.",
      "Expand validation coverage with repeatable subsystem test procedures.",
      "Refine integration architecture for easier serviceability and future upgrades."
    ],
    relatedProjects: ["cycloidial-study", "robo-arm"]
  }
];

export const projectLinkLabels = {
  repo: "View Repository",
  cad: "View CAD",
  drawings: "View Drawings",
  print: "View Print Files",
  docs: "View Documentation",
  media: "View Media / Demo"
};

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

