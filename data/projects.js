// Update the URLs, images, and text below with your real project material.
export const projects = [
  {
    slug: "warman-attempts",
    featured: true,
    title: "Warman Attempts",
    subtitle:
      "A process-focused archive of repeated Warman challenge attempts across CAD, code, prototyping, assembly, and post-mortem review.",
    year: "2023-2025",
    status: "Ongoing archive",
    projectType: "Solo",
    tags: ["Robotics", "Competition", "CAD", "Iteration", "Documentation"],
    thumbnail: "assets/images/projects/warman-attempts/repo/render/2025/Isometric View.png",
    heroImage: "assets/images/projects/warman-attempts/repo/render/2024/Chassis 2 assembly.jpg",
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
      drawings: "https://github.com/John-A-Chen/Warman-Attempts/tree/main/drawing",
      print: null,
      docs: null,
      media: "https://github.com/John-A-Chen/Warman-Attempts/tree/main/render"
    },
    gallery: [
      {
        src: "assets/images/projects/warman-attempts/repo/render/2025/Isometric View.png",
        alt: "Concept overview board for Warman Attempts",
        caption: "Archive overview showing concept branches, chassis layout, and subsystem callouts."
      },
      {
        src: "assets/images/projects/warman-attempts/repo/render/2024/Chassis 2 assembly.jpg",
        alt: "Assembly and packaging view for Warman Attempts",
        caption: "Assembly-focused view emphasising packaging, access, and prototype fit-up."
      },
      {
        src: "assets/images/projects/warman-attempts/repo/render/2024/Chassis 2 did not work.png",
        alt: "Diagnostics and lessons-learned layout for Warman Attempts",
        caption: "Failure review board documenting geometry problems, maintenance pain points, and iteration notes."
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
      "An open-source exploration of low-cost, 3D-printable mecanum wheels designed to make holonomic robotics more accessible to students, hobbyists, and educators.",
    year: "2025",
    status: "Open study",
    projectType: "Solo",
    tags: ["Robotics", "3D Printing", "Mechanisms", "Open Source", "CAD"],
    thumbnail:
      "assets/images/projects/mecanum-wheel-study/repo/images/wheel-top-view-final.png",
    heroImage:
      "assets/images/projects/mecanum-wheel-study/repo/images/assembly-isometric-view.png",
    summary:
      "An iterative, tolerance-aware mecanum wheel project focused on affordability, reproducibility, and educational value using printable components and open documentation.",
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
      repo: "https://github.com/John-A-Chen/MechanumWheelStudy",
      cad: "https://github.com/John-A-Chen/MechanumWheelStudy/tree/main/cad",
      drawings: null,
      print: "https://github.com/John-A-Chen/MechanumWheelStudy/tree/main/print",
      docs: "https://github.com/John-A-Chen/MechanumWheelStudy#readme",
      media: "https://github.com/John-A-Chen/MechanumWheelStudy/tree/main/images"
    },
    gallery: [],
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
    year: "2024-2025",
    status: "Gen 2 concept",
    projectType: "Solo",
    tags: ["Robotics", "Mechanisms", "Simulation", "CAD", "Optimisation"],
    thumbnail: "assets/images/projects/robo-arm/repo/docs/GEN1 compare GEN2.jpg",
    heroImage: "assets/images/projects/robo-arm/repo/docs/GEN2 Extended.jpg",
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
      media: null
    },
    gallery: [
      {
        src: "assets/images/projects/robo-arm/repo/docs/GEN1 compare GEN2.jpg",
        alt: "Robo-Arm full assembly render",
        caption: "Generation overview render showing the lightweight arm architecture and linkage placement."
      },
      {
        src: "assets/images/projects/robo-arm/repo/docs/GEN2 Extended.jpg",
        alt: "Four-bar linkage geometry study for Robo-Arm",
        caption: "Mechanism study focused on leverage management and actuator efficiency through the motion range."
      },
      {
        src: "assets/images/projects/robo-arm/repo/docs/progress check.png",
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
    thumbnail: "assets/images/projects/test-bench-vehicle/repo/1719583874326.jpg",
    heroImage: "assets/images/projects/test-bench-vehicle/repo/STEERING.webp",
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
      cad: "https://github.com/John-A-Chen/Test-Bench-Vehicle/tree/main/cad",
      drawings: null,
      print: null,
      docs: "https://github.com/John-A-Chen/Test-Bench-Vehicle/tree/main/docs",
      media: null
    },
    gallery: [
      {
        src: "assets/images/projects/test-bench-vehicle/repo/1719583874326.jpg",
        alt: "Compact test-bench vehicle chassis view",
        caption: "Chassis view showing the vehicle as a modular autonomous systems test platform."
      },
      {
        src: "assets/images/projects/test-bench-vehicle/repo/STEERING.webp",
        alt: "Sensor mounting study for test-bench vehicle",
        caption: "Sensor mounting and electronics access study for fast iteration and public demonstration readiness."
      },
      {
        src: "assets/images/projects/test-bench-vehicle/repo/image (2).jpg",
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
  /*
   * Temporarily hidden while these project pages are unfinished.
   * Restore by removing this comment block.
   *
  {
    slug: "camera-study",
    featured: true,
    title: "Camera Study",
    subtitle:
      "A mechanical study of traditional film camera shutters and iris assemblies, rebuilt through CAD, prototypes, and tolerance-focused iteration.",
    year: "2024-2026",
    status: "Active mechanical study",
    projectType: "Solo",
    tags: ["Mechanisms", "CAD", "Iris Design", "Prototyping", "Documentation"],
    thumbnail: "assets/images/projects/camera-study/repo/docs/lens.png",
    heroImage: "assets/images/projects/camera-study/repo/docs/lens2.png",
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
      print: null,
      docs: "https://github.com/John-A-Chen/Camera-Study/tree/main/docs",
      media: null
    },
    gallery: [
      {
        src: "assets/images/projects/camera-study/repo/docs/lens.png",
        alt: "Camera Study mechanical overview board",
        caption: "Mechanism breakdown of iris blades, pivots, and ring actuation architecture."
      },
      {
        src: "assets/images/projects/camera-study/repo/docs/lens2.png",
        alt: "Camera Study assembly and motion layout",
        caption: "Assembly-focused view highlighting blade interactions, sequence, and aperture behaviour."
      },
      {
        src: "assets/images/projects/camera-study/repo/docs/key learning 1.png",
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
    year: "2024-2026",
    status: "Ongoing archive",
    projectType: "Solo",
    tags: ["Automotive", "CAD", "Diagnostics", "Sensors", "Documentation"],
    thumbnail: "assets/images/projects/johncar/repo/docs/Concept Sketches.png",
    heroImage: "assets/images/projects/johncar/repo/docs/Drivetrain Goal.png",
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
        src: "assets/images/projects/johncar/repo/docs/Concept Sketches.png",
        alt: "JohnCar repository overview board",
        caption: "Archive layout for CAD parts, diagnostics notes, and service documentation."
      },
      {
        src: "assets/images/projects/johncar/repo/docs/Drivetrain Goal.png",
        alt: "JohnCar component and mounting studies",
        caption: "Part design and fitment studies for practical automotive use."
      },
      {
        src: "assets/images/projects/johncar/repo/docs/Grit Guard simple FEA.png",
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
    year: "2025-2026",
    status: "Parametric drive development",
    projectType: "Solo",
    tags: ["Transmission", "Cycloidal Drive", "SolidWorks", "Parametric Design", "Robotics"],
    thumbnail: "",
    heroImage: "",
    summary:
      "A manufacturing-aware cycloidal reducer study built around equations, global variables, and repeatable CAD workflows for robotic actuator applications.",
    overview: [
      "Cycloidial Study explores how to build a robust cycloidal drive workflow in SolidWorks rather than relying on static geometry. The project treats ratio selection, eccentricity, pin count, and output interfaces as tunable parameters with clear traceability.",
      "The repository combines CAD, scripting support, docs, and references to turn cycloidal design into an understandable and modifiable engineering process."
    ],
    problem: [
      "Many cycloidal resources are either fixed examples or optimised for other CAD tools, making adaptation and learning harder for SolidWorks users.",
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
      drawings: null,
      print: null,
      docs: "https://github.com/John-A-Chen/CycloidialStudy/tree/main/Docs",
      media: null
    },
    gallery: [],
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
   */
  {
    slug: "matlab-welding-robot",
    featured: true,
    title: "MATLAB Welding Robot",
    subtitle:
      "A MATLAB-based dual-robot welding cell simulation developed for 41013 Industrial Robotics and extended for 41014 Sensors and Controls with camera-guided control studies.",
    year: "2024",
    status: "Course project archive",
    projectType: "Project",
    tags: [
      "MATLAB",
      "Industrial Robotics",
      "Resolved Motion Rate Control",
      "Collision Avoidance",
      "Visual Servoing"
    ],
    thumbnail: "https://img.youtube.com/vi/RnitCm5TBhw/hqdefault.jpg",
    heroImage: "https://img.youtube.com/vi/qjHxWVd3D6w/hqdefault.jpg",
    summary:
      "A team-built simulation coordinating a heavy-workpiece manipulator and a UR3e welding arm with IK, RMRC + damped least squares, UI-driven operation modes, and ellipsoid-based collision checks.",
    overview: [
      "The repository contains iterative MATLAB development for a heavy-workpiece and welding-cell simulation using Robotics Toolbox style models. Core classes (`A2.m`, `A230.m`, `A2J2.m`) orchestrate scene setup, robot instantiation, free-joint control, and automated motion sequences.",
      "The work spans two courses. In 41013 Industrial Robotics, the focus is coordinated welding trajectories, inverse kinematics, and robot motion control. In 41014 Sensors and Controls for Mechatronic Systems, the repo extends into camera-centric experiments such as `VideoServoingLab8.m` using a central-camera model and image-based visual servoing workflow. Demo videos used in this archive: https://youtu.be/RnitCm5TBhw, https://youtu.be/qjHxWVd3D6w, and https://youtu.be/nlIlINuIPB4."
    ],
    problem: [
      "Manual welding of large components is safety-critical and physically demanding, especially around heat, fumes, and line-of-sight constraints. The project explored how a coordinated robot pair can reduce operator exposure while preserving path quality.",
      "From a controls perspective, the challenge was to generate smooth tool trajectories while avoiding poor Jacobian conditioning and handling obstacle-aware operation in the same workspace."
    ],
    role: [
      "MATLAB simulation architecture and iterative class/script development",
      "Kinematic modelling integration for UR3e and KUKA Titan variants",
      "RMRC trajectory generation with damped least-squares Jacobian inversion",
      "GUI workflow for free control, sequence execution, path placement, and E-stop handling",
      "Collision-obstacle checks using ellipsoid-link approximations"
    ],
    process: [
      {
        title: "Model and scene integration",
        body:
          "Robot models (`UR3e.m`, `KukaTitan.m`, `NachiMZ04.m`, `LinearNachiMZ04.m`) were assembled into a common scene with textured floor/walls and PLY assets for environment and tooling."
      },
      {
        title: "Control pipeline refinement",
        body:
          "Early standalone scripts (`A1mess*`, `RMRC*`) were consolidated into class-based flows (`A2*`) that support repeatable UI entry points for free-joint control, scripted welding sequence, and controller-based Cartesian jogging."
      },
      {
        title: "Trajectory and singularity handling",
        body:
          "RMRC loops were implemented for both robot arms with manipulability checks and damped least-squares inverse Jacobians to reduce instability near singular configurations."
      },
      {
        title: "Collision and sensing extensions",
        body:
          "Obstacle interaction was approximated by transforming link point-cloud segments through each joint frame and testing algebraic distance against ellipsoids. Separate visual-servoing scripts explored camera feedback control for sensor-focused coursework."
      }
    ],
    technicalHighlights: [
      {
        title: "Dual-arm RMRC workflow",
        body:
          "`A2.m` and `A230.m` compute end-effector trajectories, solve initial IK with `ikcon`, and step joint states via Jacobian-based velocity mapping for both UR3e and KUKA branches."
      },
      {
        title: "Manual and joystick control interfaces",
        body:
          "The project exposes uicontrol sliders for direct joint manipulation and includes joystick-based Cartesian updates (`vrjoystick`) for interactive testing and demonstration."
      },
      {
        title: "Collision approximation with ellipsoids",
        body:
          "Link geometry is sampled/updated per transform, then checked against obstacle ellipsoids using algebraic distance tests to flag points inside exclusion volumes."
      },
      {
        title: "Sensor-and-controls crossover",
        body:
          "`VideoServoingLab8.m` adds an image-based visual-servoing path using a central camera model, visual Jacobian (`visjac_p`), and robot Jacobian inversion for camera-to-joint control."
      }
    ],
    tools: [
      "MATLAB",
      "Peter Corke Robotics Toolbox ecosystem",
      "SerialLink / Link kinematics",
      "PLY-based geometry assets",
      "MATLAB UI controls and joystick input"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/MATLAB-Welding-Robot",
      cad: null,
      drawings: null,
      print: null,
      docs: "https://john-a-chen.github.io/assets/docs/matlab-welding-robot-source-code-map.md",
      media: "https://youtu.be/RnitCm5TBhw"
    },
    gallery: [
      {
        src: "https://img.youtube.com/vi/RnitCm5TBhw/hqdefault.jpg",
        alt: "MATLAB Welding Robot 41013 final video thumbnail",
        caption: "41013 final video thumbnail."
      },
      {
        src: "https://img.youtube.com/vi/qjHxWVd3D6w/hqdefault.jpg",
        alt: "MATLAB Welding Robot team video thumbnail",
        caption: "Team welding video thumbnail (Chris, Guy, John)."
      },
      {
        src: "https://img.youtube.com/vi/nlIlINuIPB4/hqdefault.jpg",
        alt: "MATLAB Welding Robot sensors and controls video thumbnail",
        caption: "41014 hand-eye calibration and visual-servoing video thumbnail."
      }
    ],
    lessonsLearned: [
      "Class-based orchestration made the large collection of scripts much easier to run and extend than ad-hoc one-off files.",
      "Damped least squares and manipulability checks are essential for robust RMRC in mixed-geometry robot setups.",
      "Clear UI pathways (free control, sequence, E-stop, controller mode) materially improved demo reliability under assignment time pressure."
    ],
    futureWork: [
      "Complete the repository rename and add a top-level README that maps primary entry scripts and dependencies.",
      "Consolidate legacy script variants into a cleaner folder hierarchy (`models`, `controllers`, `demos`, `experiments`).",
      "Add repeatable validation plots for path error, joint limits, and collision-margin metrics."
    ],
    relatedProjects: ["robo-arm", "solid-connections", "forestguard"]
  },
  {
    slug: "holoassist",
    featured: true,
    title: "HoloAssist",
    subtitle:
      "An XR-based human-robot collaboration framework connecting Quest teleoperation, ROS 2 perception, RealSense AprilTag cube tracking, UR3e/RG2 control, MoveIt, and dashboard monitoring.",
    year: "2025-2026",
    status: "RS2 final project archive",
    projectType: "Project",
    tags: ["ROS 2", "XR", "Perception", "MoveIt", "Team Project"],
    thumbnail: "https://john-a-chen.github.io/HoloAssist/screenshots/rviz_cubes.png",
    heroImage: "https://john-a-chen.github.io/HoloAssist/screenshots/quest_ar_overlay.png",
    summary:
      "A team-built HRI platform where my strongest contribution was perception and integration: narrowing a broad RGB-D workspace concept into a reliable AprilTag cube-pose pipeline, then documenting the interfaces needed for Unity, RViz, MoveIt, calibration, and handover.",
    overview: [
      "HoloAssist was developed for Robotics Studio 2 as a human-robot collaboration system combining XR teleoperation, ROS 2 control, robot perception, robot visualisation, and semi-autonomous task execution. The system connects a Meta Quest headset and Unity interface to a physical UR3e robot with an OnRobot RG2 gripper while using perception to locate cubes and support pick-and-place style tasks.",
      "My final reflection reframed the project around two main engineering stories: perception integration and handover readiness. The perception subsystem moved from broad RGB-D workspace understanding toward a constrained AprilTag cube-tracking interface because stable cube poses were more useful for Unity, RViz, MoveIt, and the final demo than a broader but less reliable point-cloud concept."
    ],
    problem: [
      "Collaborative robot tasks require operators to understand robot state, object pose, workspace constraints, calibration, and safety limits across several tools at once. Without stable interfaces, camera detections can look correct but still be unusable by robot motion or XR visualisation.",
      "The main challenge was not only building features, but making perception, calibration, Unity, RViz, dashboard monitoring, and MoveIt agree on topic names, TF frames, launch modes, and handover assumptions."
    ],
    role: [
      "Perception subsystem design, integration, and documentation",
      "AprilTag cube-tracking pipeline with tag groups, cube geometry, stale detection handling, and debug overlays",
      "Calibration and TF handover work connecting camera observations to robot-base poses",
      "Interface documentation for RViz, Unity relay topics, MoveIt pick-and-place inputs, and troubleshooting checks",
      "Repository cleanup and handover analysis covering branch mismatch, stale paths, submodules, Unity local packages, and fresh-clone risks"
    ],
    process: [
      {
        title: "Broad RGB-D concept",
        body:
          "The initial direction explored RealSense RGB-D input, point-cloud workspace modelling, object detection, dynamic obstacle detection, and no-go-zone visualisation. That matched the XR collaboration goal, but it was too broad and noise-sensitive for a reliable final integrated demo."
      },
      {
        title: "AprilTag cube interface",
        body:
          "The perception scope narrowed to AprilTags on cubes using known tag IDs, tag size, cube edge length, and face-to-centre offsets. This created clear per-cube pose topics that downstream systems could test and consume."
      },
      {
        title: "Integrated perception package",
        body:
          "The final perception work became a proper `HoloAssist_Perception` ROS package with launch files, camera bringup, AprilTag config, cube geometry config, debug image overlays, RViz markers, service integration, fallback webcam support, and MoveIt target adapters."
      },
      {
        title: "Handover and reproducibility",
        body:
          "The final work also audited repository structure, submodule paths, Unity package paths, launch assumptions, branch drift, stale paths, and setup documentation because the project needed to be understandable and launchable by someone other than the original developers."
      }
    ],
    technicalHighlights: [
      {
        title: "RealSense to cube-pose pipeline",
        body:
          "The pipeline runs from RealSense colour input through `apriltag_ros` detections, cube pose fusion, per-cube `PoseStamped` topics, RViz markers, Unity relay topics, and MoveIt pick-place inputs."
      },
      {
        title: "Multi-face cube pose fusion",
        body:
          "Each cube maps to a six-tag group, allowing visible faces to generate candidate cube centres. Parameters such as tag size, cube edge size, face offset, detection timeout, publish rate, and consensus threshold became practical debugging handles."
      },
      {
        title: "Debug overlay as an evaluation tool",
        body:
          "The `aprilcube_tracker_node.py` debug image made perception observable by showing tag outlines, cube wireframes, detection age, FPS-style runtime feedback, and whether the camera/tag/cube pipeline was actually behaving."
      },
      {
        title: "Calibration and TF integration",
        body:
          "The easy_handeye2 workflow documents an eye-on-base transform from `base_link` to `camera_link`, making camera detections usable by the robot planning frame instead of remaining isolated image observations."
      }
    ],
    tools: [
      "Unity",
      "Meta Quest",
      "ROS 2 Humble",
      "UR3e",
      "OnRobot RG2",
      "AprilTag",
      "RealSense D435i",
      "MoveIt",
      "RViz",
      "PyQt5 dashboard",
      "ROS-TCP Connector"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/HoloAssist",
      website: "https://john-a-chen.github.io/HoloAssist/",
      cad: null,
      drawings: null,
      print: null,
      docs: "https://john-a-chen.github.io/HoloAssist/docs/",
      media: "https://john-a-chen.github.io/HoloAssist/#gallery"
    },
    galleryPreviewLimit: 18,
    gallery: [
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/quest_ar_overlay.png",
        alt: "HoloAssist Quest mixed-reality overlay",
        caption: "Quest mixed-reality overlay showing robot and task context in the operator view."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/rviz_cubes.png",
        alt: "HoloAssist AprilTag cube tracking in RViz",
        caption: "RViz perception view showing tracked cubes and coordinate-frame context."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/dashboard.png",
        alt: "HoloAssist dashboard",
        caption: "Dashboard view used to inspect runtime state outside the XR headset."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/perception.png",
        alt: "HoloAssist AprilTag perception pipeline",
        caption: "AprilTag perception view showing cube tracking and robot-frame context."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/perception.gif",
        alt: "HoloAssist live perception tracking",
        caption: "Animated perception capture showing live cube tracking during runtime."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/multicubetracking.png",
        alt: "HoloAssist multi-cube tracking in RViz",
        caption: "Multi-cube tracking result used to validate the AprilTag cube workflow."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/cubebintracking.png",
        alt: "HoloAssist cube and bin tracking view",
        caption: "Cube and bin tracking view connecting perception output to task context."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/calibration.png",
        alt: "HoloAssist hand-eye calibration",
        caption: "Hand-eye calibration view supporting the camera-to-robot transform."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/camera_setup.jpeg",
        alt: "HoloAssist RealSense camera setup",
        caption: "Physical RealSense camera setup used for the sim-to-real perception path."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/teleoperation.png",
        alt: "HoloAssist teleoperation workflow",
        caption: "Teleoperation workflow capture showing the operator-driven robot-control mode."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/teleoperation.gif",
        alt: "HoloAssist animated teleoperation demo",
        caption: "Animated teleoperation demo showing the XR-to-robot interaction loop."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/visualisation.png",
        alt: "HoloAssist robot visualisation",
        caption: "Robot visualisation view used to communicate live system state."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/visualisation.gif",
        alt: "HoloAssist animated visualisation",
        caption: "Animated visualisation capture showing live robot and scene feedback."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/autonomous.png",
        alt: "HoloAssist autonomous workflow",
        caption: "Autonomous workflow capture from the task-execution side of the project."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/autonomous.gif",
        alt: "HoloAssist autonomous demo animation",
        caption: "Animated autonomous demo showing supervised task execution behavior."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/headsetstreamdashboard.png",
        alt: "HoloAssist headset stream dashboard",
        caption: "Dashboard headset stream used for monitoring the operator's XR view."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/debugtabdashboard.png",
        alt: "HoloAssist dashboard debug tab",
        caption: "Debug dashboard view exposing runtime state for faster system diagnosis."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/resourcemonitor.png",
        alt: "HoloAssist resource monitor",
        caption: "Resource monitoring view used to understand runtime load during demos."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/session.png",
        alt: "HoloAssist session logging",
        caption: "Session logging view preserving interaction and demonstration context."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/ollieteleop.png",
        alt: "HoloAssist teleoperation demo setup",
        caption: "Teleoperation demo setup showing operator interaction with the robot workflow."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/apriltest.png",
        alt: "HoloAssist AprilTag test capture",
        caption: "AprilTag test capture used during perception validation."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/aprilcube2docs.png",
        alt: "HoloAssist AprilTag cube documentation",
        caption: "AprilTag cube documentation capture from the physical perception setup."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/printingaprilcubes.png",
        alt: "HoloAssist AprilTag cube printing",
        caption: "Printed AprilTag cube preparation for repeatable physical perception tests."
      },
      {
        src: "https://john-a-chen.github.io/HoloAssist/screenshots/simtestingold.png",
        alt: "HoloAssist simulation testing",
        caption: "Simulation testing capture from an earlier system-integration pass."
      }
    ],
    lessonsLearned: [
      "A perception subsystem is only useful when its outputs are framed, timed, documented, and connected clearly enough for the next subsystem to use.",
      "Narrowing the perception scope from broad RGB-D workspace understanding to AprilTag cube tracking improved reliability, testability, and integration confidence.",
      "Repository structure is a technical interface: submodules, launch scripts, Unity package paths, branch names, and documentation all affect whether another engineer can reproduce the system.",
      "Calibration is not a side task; the TF chain determines whether a visually correct detection can become a robot-usable pose."
    ],
    futureWork: [
      "Add quantitative cube-pose accuracy testing against known ground-truth positions.",
      "Add automated launch smoke tests for fake hardware, perception-only, and MoveIt modes.",
      "Combine the stable AprilTag pipeline with markerless RGB-D segmentation or point-cloud validation.",
      "Create a dashboard calibration-status panel showing whether `base_link -> camera_link` is available.",
      "Add a first-run setup script and submodule checks so fresh clones fail less mysteriously.",
      "Tag a final handover release so docs, source code, and setup instructions refer to one exact commit."
    ],
    relatedProjects: ["holoassist-ai", "forestguard", "matlab-welding-robot"]
  },
  {
    slug: "holoassist-ai",
    featured: true,
    title: "HoloAssist-AI",
    subtitle:
      "An AI extension to HoloAssist combining RGB-D point-cloud clustering, Gazebo/Isaac simulation, and reinforcement-learning experiments for robotic grasping.",
    year: "2026",
    status: "Course project site",
    projectType: "Project",
    tags: ["AI Robotics", "Reinforcement Learning", "Perception", "Simulation", "Team Project"],
    thumbnail: "https://sebastian-baudille.github.io/HoloAssist-AI/screenshots/clustering_method_comparison.png",
    heroImage: "https://sebastian-baudille.github.io/HoloAssist-AI/screenshots/mujoco.gif",
    summary:
      "A team-built follow-up to HoloAssist that explores marker-free cube perception and policy-learning workflows for autonomous grasping, with a dedicated documentation site and live cross-links back to the base project.",
    overview: [
      "HoloAssist-AI extends the base HoloAssist platform into autonomous perception and learning. Instead of relying only on AprilTag markers, the AI project explores RGB-D point-cloud preprocessing, DBSCAN clustering, centroid extraction, and reinforcement-learning pipelines for UR3e cube manipulation.",
      "The website documents the project's simulation paths across Gazebo, MuJoCo, and Isaac Sim, while also being clear about what was demonstrated, what remained partial, and how the AI work relates back to HoloAssist calibration and teleoperation data."
    ],
    problem: [
      "Robot grasping projects can get trapped between clean simulation assumptions and messy physical perception. The project needed to connect object detection, calibration, action design, and policy training without pretending that an isolated demo was a complete deployed robot.",
      "HoloAssist-AI frames that challenge as an end-to-end pipeline problem: perceive cube positions from RGB-D data, feed useful observations to a learning agent, and evaluate whether reinforcement learning can support the grasping workflow."
    ],
    role: [
      "Website and documentation development for the HoloAssist-AI public project site",
      "RL support, training-result presentation, and pipeline explanation",
      "Cross-linking the AI extension with the base HoloAssist perception and calibration work",
      "Teleoperation-data context from the base HoloAssist XR workflow"
    ],
    process: [
      {
        title: "Point-cloud perception pipeline",
        body:
          "The project explored marker-free cube detection by cropping RGB-D point clouds, clustering candidate cube regions, and reporting object centroids for downstream control experiments."
      },
      {
        title: "Simulation and policy experiments",
        body:
          "Team members compared simulation routes including Gazebo, MuJoCo, and Isaac Sim to understand where RL training was stable, where it broke down, and what each environment made easier or harder."
      },
      {
        title: "Documentation as evidence",
        body:
          "The public site records successes, failures, limitations, and training plots so the project reads as an engineering investigation rather than a polished-only showcase."
      },
      {
        title: "Continuity with HoloAssist",
        body:
          "The AI pipeline keeps the base project's calibration and sim-to-real context in view, connecting new perception work back to the original XR teleoperation stack."
      }
    ],
    technicalHighlights: [
      {
        title: "DBSCAN cube clustering",
        body:
          "RGB-D captures are converted into filtered point clouds, clustered, and evaluated as cube-centroid candidates without requiring AprilTag markers on every face."
      },
      {
        title: "RL training comparisons",
        body:
          "The site documents policy-training attempts across simulation environments, including partial successes, unstable grasping behavior, and action-space lessons."
      },
      {
        title: "Live project cross-linking",
        body:
          "The HoloAssist-AI site links back to HoloAssist's base perception and calibration pages, making the relationship between both semester projects explicit."
      }
    ],
    tools: [
      "ROS 2 Humble",
      "Gazebo",
      "MuJoCo",
      "NVIDIA Isaac Sim / Isaac Lab",
      "Python",
      "DBSCAN",
      "PPO",
      "GitHub Pages"
    ],
    links: {
      repo: "https://github.com/Sebastian-Baudille/HoloAssist-AI",
      website: "https://sebastian-baudille.github.io/HoloAssist-AI/",
      cad: null,
      drawings: null,
      print: null,
      docs: "https://sebastian-baudille.github.io/HoloAssist-AI/docs/",
      media: "https://sebastian-baudille.github.io/HoloAssist-AI/#gallery"
    },
    gallery: [
      {
        src: "https://sebastian-baudille.github.io/HoloAssist-AI/screenshots/mujoco.gif",
        alt: "HoloAssist-AI MuJoCo policy experiment",
        caption: "MuJoCo policy experiment used to study staged reaching and grasp behavior."
      },
      {
        src: "https://sebastian-baudille.github.io/HoloAssist-AI/screenshots/clustering.gif",
        alt: "HoloAssist-AI point-cloud clustering demo",
        caption: "Animated clustering demo showing the RGB-D perception pipeline."
      },
      {
        src: "https://sebastian-baudille.github.io/HoloAssist-AI/screenshots/isaacsim.gif",
        alt: "HoloAssist-AI Isaac Sim experiment",
        caption: "Isaac Sim experiment exploring scalable RL training for the UR3e task."
      }
    ],
    lessonsLearned: [
      "RL progress depends heavily on observation design, action scale, and environment fidelity; training plots need interpretation, not just display.",
      "Marker-free point-cloud perception is portfolio-worthy when its limitations and calibration assumptions are made explicit.",
      "Cross-linking the AI project to the base HoloAssist stack makes the semester sequence much clearer."
    ],
    futureWork: [
      "Connect perception, policy output, and robot execution into one deployable end-to-end demonstration.",
      "Compare the DBSCAN route against learned pose-estimation methods where hardware allows.",
      "Use stronger demonstration data or staged policies to improve grasp and transport stability."
    ],
    relatedProjects: ["holoassist", "forestguard", "matlab-welding-robot"]
  },
  {
    slug: "forestguard",
    featured: true,
    title: "ForestGuard",
    subtitle:
      "A ROS 2 Humble simulation stack for a Husky-style UGV, combining Gazebo, RViz, SLAM, Nav2, joystick teleop, and autonomy bringup from one launch file.",
    year: "2025-2026",
    status: "Sanitized public release",
    projectType: "Project",
    tags: ["ROS 2", "Autonomy", "Simulation", "Navigation", "Team Project"],
    thumbnail: "assets/images/projects/forestguard/repo/images/02_gazebo_rviz_robotmodel_nav2_panel.png",
    heroImage: "assets/images/projects/forestguard/repo/images/25_gazebo_forest_path_perspective.png",
    summary:
      "A simulation-first autonomy project that packages environment generation, robot localisation, perception debugging, UI control, and mission execution into a reproducible single-terminal workflow.",
    overview: [
      "ForestGuard is a simulation stack built around ROS 2 Humble for a Husky-style UGV operating in a forest environment. The project integrates Ignition/Gazebo, RViz visualisation, SLAM, Nav2, teleop, and autonomy behavior into one launch path so setup overhead is low and demonstrations are consistent.",
      "The public repository is intentionally sanitized for subject protection, but still documents system architecture, launch workflow, UI operation, and world-generation tooling. The project is designed to be usable for demonstrations, debugging, and controlled variation of forest world layouts."
    ],
    problem: [
      "Multi-node robotics stacks are easy to break when each subsystem is launched and configured manually. Reproducing the same working state for simulation, localisation, perception, and control can become unreliable.",
      "ForestGuard addresses this by centralising bringup and documenting operator flow so users can run a full mission scenario from a single launch command while still exposing tuning entry points for Nav2, SLAM, perception, and autonomy."
    ],
    role: [
      "System integration across simulation, localisation, navigation, and autonomy nodes",
      "UI and teleop workflow definition for controller-driven and mission-driven operation",
      "Forest world pipeline development using terrain meshes and generated tree layouts",
      "Public-safe technical documentation for setup, debugging, and parameter tuning"
    ],
    process: [
      {
        title: "Single-command bringup architecture",
        body:
          "The stack was organised so Gazebo, bridges, state estimation, SLAM, Nav2, UI, and autonomy services are launched together from forestguardmission.launch.py. This reduced startup mismatch and made demos repeatable."
      },
      {
        title: "Operator-first UI and control flow",
        body:
          "Controller actions were mapped to practical runtime tasks like teleop takeover, speed scaling, camera switching, and HSV mask mode toggling so the stack can be driven and debugged without opening multiple terminals."
      },
      {
        title: "Procedural forest world generation",
        body:
          "Terrain and tree placement were separated into reusable scripts. Tree XY samples are snapped to terrain height and converted into SDF world files, enabling fast environment variants without manual object placement."
      },
      {
        title: "Troubleshooting and tuning documentation",
        body:
          "The README captures dependency fixes, runtime failure modes, launch prerequisites, and key parameter files so users can recover quickly when simulation, TF, joystick, or rendering issues appear."
      }
    ],
    technicalHighlights: [
      {
        title: "Integrated Nav2 + SLAM + autonomy workflow",
        body:
          "The project combines mapping/localisation and mission behavior in one simulation loop, allowing controlled transitions between manual teleop and autonomous execution."
      },
      {
        title: "Perception debugging via HSV camera mode",
        body:
          "Camera view cycling and HSV remap mode support faster canopy threshold debugging and visual verification of segmentation behavior during runtime."
      },
      {
        title: "Terrain-aware tree placement pipeline",
        body:
          "World generation scripts cast tree positions onto mesh height before SDF export, which keeps generated forests physically aligned with terrain geometry."
      }
    ],
    tools: [
      "ROS 2 Humble",
      "Nav2",
      "SLAM Toolbox",
      "Ignition Gazebo / ros_gz_bridge",
      "RViz2",
      "Python",
      "PySide6"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/ForestGuard",
      cad: null,
      drawings: null,
      print: null,
      docs: "https://github.com/John-A-Chen/ForestGuard#readme",
      media: "https://github.com/John-A-Chen/ForestGuard/tree/main/images"
    },
    gallery: [
      {
        src: "assets/images/projects/forestguard/repo/images/02_gazebo_rviz_robotmodel_nav2_panel.png",
        alt: "ForestGuard Gazebo and RViz dual-view bringup",
        caption: "Full simulation bringup showing Husky in Gazebo with RViz overlays and Nav2 context."
      },
      {
        src: "assets/images/projects/forestguard/repo/images/23_ui_camera_and_radial_tree_map.png",
        alt: "ForestGuard runtime UI with camera and tree map",
        caption: "Operator UI panel with camera feed and radial tree-map view for runtime monitoring."
      },
      {
        src: "assets/images/projects/forestguard/repo/images/39_topdown_scan_with_tree_detections.png",
        alt: "ForestGuard top-down LiDAR detections",
        caption: "Top-down sensor map showing scan structure and tree detection feedback."
      }
    ],
    lessonsLearned: [
      "Single-entry launch orchestration dramatically improves reproducibility for complex robotics demos.",
      "Operator controls and debug views should be designed as first-class system interfaces, not afterthought tooling.",
      "Procedural environment generation becomes more useful when mesh alignment and asset paths are handled in scripts, not manual edits."
    ],
    futureWork: [
      "Replace pseudocode placeholders with publishable implementation modules when release constraints allow.",
      "Expand automated mission evaluation metrics for path quality, detection stability, and autonomy completion reliability.",
      "Add packaged presets for different forest densities and terrain profiles to speed scenario-based testing."
    ],
    relatedProjects: ["test-bench-vehicle"]
  },
  {
    slug: "john-stm",
    featured: true,
    title: "John STM",
    subtitle:
      "A compact STM32L476-based battery-powered desk device PCB, combining USB-C input, LiPo charging, 3.3 V regulation, display hardware, sensors, feedback components, enclosure CAD, and manufacturing exports.",
    year: "2026",
    status: "PCB design and fabrication preparation",
    projectType: "Solo",
    tags: ["PCB Design", "STM32", "Embedded Hardware", "Altium", "Enclosure CAD"],
    thumbnail: "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Front.png",
    heroImage: "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Mockup A.png",
    summary:
      "A custom embedded hardware project focused on turning a smart desk-cube idea into a manufacturable PCB and enclosure package, with real decisions around USB-C power, LiPo charging, grounding, routing, board exports, and assembly planning.",
    overview: [
      "John STM is a compact STM32L476-based hardware project built around a small battery-powered desk device. The repository contains Altium source files, generated PCB outputs, SolidWorks enclosure models, STEP/DXF exports, reusable part models, display module references, production files, and screenshots of PCB and enclosure iterations.",
      "The project is not just a schematic exercise. It ties together power-system design, flat multi-sheet Altium organisation, PCB layout, ground-plane strategy, enclosure packaging, display and actuator fitment, JLCPCB fabrication workflow, stencil planning, and future firmware validation."
    ],
    problem: [
      "Small embedded desk devices can become messy when power, charging, display, sensing, feedback, firmware, and enclosure requirements are designed separately.",
      "This project addresses that by developing one compact hardware platform that can be powered from USB-C, operate from a single-cell LiPo battery, regulate logic power, drive a small display, sense movement or orientation, and support future firmware modes without staying at breadboard level."
    ],
    role: [
      "Defined the embedded desk-cube hardware concept and feature set",
      "Designed the flat multi-sheet Altium project across power, MCU, and peripheral schematic sheets",
      "Planned USB-C input, LiPo charging, 3.3 V regulation, display, motion sensing, buttons, buzzer, and haptic feedback hardware",
      "Routed and reviewed the PCB layout, including layer views, ground pours, ground stitching vias, and manufacturing constraints",
      "Developed enclosure CAD iterations and fitment checks for display, battery, buzzer, haptic motor, and panels",
      "Prepared fabrication and assembly outputs including PCB exports, BOM/reference files, production archives, STEP/DXF files, and stencil-related files"
    ],
    process: [
      {
        title: "Concept and architecture",
        body:
          "The project started as a calm, low-clutter smart desk cube with possible modes such as a Pomodoro timer, desk clock, system monitor, ambient display, and orientation-based interactions. That forced hardware and firmware planning to happen together from the start."
      },
      {
        title: "Power and charging design",
        body:
          "The power path became a core subsystem: USB-C input, single-cell LiPo support, charging-current assumptions, regulator selection, 3.3 V distribution, and safe bring-up planning all had to be treated as engineering decisions rather than wiring details."
      },
      {
        title: "PCB layout iteration",
        body:
          "The layout evolved through PCB1 and PCB2 outputs, with top/bottom signal views, inner ground and power layer checks, front/rear board views, component placement, vias, and ground stitching reviewed as the board moved toward fabrication readiness."
      },
      {
        title: "Enclosure and assembly fitment",
        body:
          "SolidWorks enclosure iterations tested screen mounting, printed fitment, buzzer and haptic placement, panel geometry, and exported handoff files so the PCB could be considered as part of a physical object rather than a loose board."
      },
      {
        title: "Manufacturing preparation",
        body:
          "The project moved into production-file thinking through Gerbers, drill files, board-outline checks, BOM/reference exports, JLCPCB feedback, stencil discussion, and first-power-up planning."
      }
    ],
    technicalHighlights: [
      {
        title: "Flat multi-sheet Altium design",
        body:
          "The source project is organised as a flat Altium PCB project with separate power, MCU, and peripherals sheets, keeping subsystem boundaries readable without introducing unnecessary hierarchy."
      },
      {
        title: "Battery-powered USB-C architecture",
        body:
          "The design includes USB-C input, single-cell LiPo support, charging circuitry, 3.3 V regulation, and power-distribution decisions that need to be safe and testable before firmware work can be trusted."
      },
      {
        title: "Ground-plane and via strategy",
        body:
          "The layout uses ground planes, ground pours, and stitching vias to strengthen return paths and avoid relying only on local top-layer copper for ground connectivity."
      },
      {
        title: "Manufacturing feedback loop",
        body:
          "The JLCPCB board-outline issue made fabrication files part of the engineering process, showing that a board is not submission-ready until outline, drill, copper, solder mask, silkscreen, and export settings are all checked."
      },
      {
        title: "Mechanical-electrical co-design",
        body:
          "Display snapshots, battery models, buzzer and haptic motor CAD, enclosure prints, and screen-mount checks connect the electronic design to the physical packaging."
      }
    ],
    tools: [
      "Altium Designer",
      "SolidWorks",
      "STM32L476",
      "USB-C power design",
      "LiPo charging design",
      "ST7789 display module",
      "ADXL335-style motion sensing",
      "JLCPCB fabrication workflow",
      "PCB layout and routing",
      "Gerber / drill / stencil exports"
    ],
    links: {
      repo: "https://github.com/John-A-Chen/John-STM/",
      cad: "https://github.com/John-A-Chen/John-STM/tree/main/hardware/enclosure",
      drawings: "https://github.com/John-A-Chen/John-STM/blob/main/hardware/pcb/exports/John%20STM.pdf",
      print: "https://github.com/John-A-Chen/John-STM/tree/main/docs/production%20file",
      docs: "https://github.com/John-A-Chen/John-STM#readme",
      media: "https://github.com/John-A-Chen/John-STM/tree/main/docs/screenshots"
    },
    galleryPreviewLimit: 18,
    gallery: [
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Mockup A.png",
        alt: "John STM PCB2 mockup view",
        caption: "PCB2 mockup showing the compact board direction after layout iteration."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Front.png",
        alt: "John STM PCB2 front view",
        caption: "Front board view used to review component placement and routing density."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Top Signal Layer.png",
        alt: "John STM PCB2 top signal layer",
        caption: "Top signal layer view for routing and component-side layout review."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Ground Layer.png",
        alt: "John STM PCB2 ground layer",
        caption: "Ground layer view used to check return-path quality and plane continuity."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/Enclosure 3 CAD A.png",
        alt: "John STM enclosure version 3 CAD",
        caption: "Version 3 enclosure CAD showing the physical packaging direction."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/Enclosure 3 Fitment.jpg",
        alt: "John STM enclosure fitment photo",
        caption: "Printed enclosure fitment check for the display and internal hardware."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/Enclosure 3 Buzzer Haptic.jpg",
        alt: "John STM buzzer and haptic fitment",
        caption: "Buzzer and haptic motor placement review inside the enclosure."
      },
      {
        src: "assets/images/projects/john-stm/repo/hardware/parts/display-1-69-st7789v2/snapshot/Top Display 1.69 ST7789V2.jpg",
        alt: "John STM ST7789V2 display top side",
        caption: "1.69 inch ST7789V2 display module reference used for packaging and interface planning."
      }
    ],
    lessonsLearned: [
      "PCB design is a system-level process where schematic, layout, firmware, enclosure, and manufacturing all affect one another.",
      "Battery charging and USB-C power decisions need careful review because safety and reliability are core requirements, not optional polish.",
      "A top-layer ground pour does not replace deliberate via placement when an internal ground plane is available.",
      "Manufacturing feedback can reveal missing mechanical/export details that are invisible during schematic capture.",
      "Ordering the PCB is not the end of the design process; assembly, first power-up, debugging, and revision planning are just as important."
    ],
    futureWork: [
      "Verify the board outline and full Gerber/drill/solder-mask/silkscreen export set before the next fabrication upload.",
      "Confirm the selected LiPo capacity and adjust charger current if the cell datasheet requires it.",
      "Prepare a first-power-up checklist and test the 3.3 V rail before powering sensitive components.",
      "Validate USB power, battery charging, regulator output, display communication, sensor readings, buttons, buzzer, and haptic feedback one subsystem at a time.",
      "Add firmware documentation once the assembled hardware has been brought up and tested."
    ],
    relatedProjects: ["solid-connections", "robo-arm"]
  },
  {
    slug: "solid-connections",
    featured: true,
    title: "Solid Connections",
    subtitle:
      "A multidisciplinary mechatronic systems project integrating mechanical design, custom PCB development, embedded firmware, and iterative validation.",
    year: "2025-2026",
    status: "Private repository, documented case study",
    projectType: "Project",
    tags: ["Mechatronics", "PCB Design", "Embedded Systems", "Integration", "Iteration"],
    thumbnail: "assets/images/projects/solid-connections/repo/Documentation/Diagrams/diagram-hero-render-red-enclosure.png",
    heroImage: "assets/images/projects/solid-connections/repo/Documentation/Images/render-transparent-enclosure-cutaway-01.png",
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
      cad: null,
      drawings: null,
      print: null,
      docs: null,
      media: null
    },
    gallery: [
      {
        src: "assets/images/projects/solid-connections/repo/Documentation/Diagrams/diagram-system-block-v2.png",
        alt: "Solid Connections system block diagram",
        caption: "Updated system block diagram showing current cross-domain integration points."
      },
      {
        src: "assets/images/projects/solid-connections/repo/Documentation/Images/render-cad-exploded-assembly-purple.png",
        alt: "Solid Connections CAD exploded render",
        caption: "Exploded CAD render highlighting enclosure and internal assembly packaging."
      },
      {
        src: "assets/images/projects/solid-connections/repo/Documentation/Images/photo-pcb-front-with-oled.jpg",
        alt: "Solid Connections PCB and OLED hardware photo",
        caption: "Hardware capture of PCB and OLED integration used during bringup and validation."
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
    relatedProjects: ["john-stm", "robo-arm"]
  }
];

export const projectLinkLabels = {
  repo: "View Repository",
  website: "View Project Site",
  cad: "View CAD",
  drawings: "View Drawings",
  print: "View Print Files",
  docs: "View Documentation",
  media: "View Media / Demo"
};

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
