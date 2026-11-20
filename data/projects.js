// Update the URLs, images, and text below with your real project material.
export const projects = [
  {
    slug: "warman-attempts",
    hiddenImages: [
      "/render/2024/Chassis 0 CAD.png",
      "/render/2024/Chassis 1 CAD.png",
      "/render/2025/Back View.png",
      "/render/2025/Bottom View.png",
      "/render/2025/Front View.png",
      "/render/2025/Isometric View.png",
      "/render/2025/Side View.png",
      "/render/2025/Top View.png",
      "/render/2025/Scooper Isometric.png"
    ],
    course: "41059 Mechanical Design Fundamentals Studio 1",
    featured: true,
    title: "Warman Challenge Robots",
    subtitle: "Two goes at the Warman design-and-build challenge: the original robot for Mechanical Design Fundamentals Studio 1, and my own redesign the following year, built mainly from plywood.",
    year: "2023-2025",
    status: "Ongoing archive",
    projectType: "Solo",
    tags: ["Robotics", "Competition", "CAD", "Iteration", "Documentation"],
    thumbnail: "assets/images/projects/warman-attempts/cad/2025-prototype-1-iso.png",
    heroImage: "assets/images/projects/warman-attempts/cad/2025-prototype-1-iso.png",
    cardImages: [
      "assets/images/projects/warman-attempts/cad/2025-prototype-1-iso.png",
      "assets/images/projects/warman-attempts/cad/2024-chassis-0-iso.png",
      "assets/images/projects/warman-attempts/cad/2024-chassis-1-iso.png",
      "assets/images/projects/warman-attempts/cad/2024-chassis-2-iso.png",
      "assets/images/projects/warman-attempts/cad/2024-full-assembly-iso.png",
      "assets/images/projects/warman-attempts/cad/2025-electronics-package-iso.png",
      "assets/images/projects/warman-attempts/cad/2025-packaging-mockup-iso.png",
      "assets/images/projects/warman-attempts/cad/2025-scooper-iso.png",
      "assets/images/projects/warman-attempts/cad/2025-wheel-iso.png"
    ],
    summary: "The first robot ran out of time. The second was a redesign I did for myself after spending a holiday improving my mechanical design.",
    overview: [
      "My first Warman robot was for Mechanical Design Fundamentals Studio 1. It did not do well: I ran out of time, and my design skills were not yet up to the build.",
      "I spent the following holidays working on my mechanical design, mainly through the Test-Bench Vehicle project. The year after, I designed a Warman robot again on my own, this time built mostly from plywood with much less 3D printing."
    ],
    problem: [
      "The Warman challenge packs concept, fabrication, programming and testing into a short, high-pressure cycle, and the first attempt showed where I fell short.",
      "The second robot was not for marks. The aim was to redo the design properly with what I had learned since."
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
        src: "assets/images/projects/warman-attempts/cad/2025-prototype-1-iso.png",
        alt: "2025 prototype 1, isometric view",
        caption: "2025 prototype 1, isometric view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2025-prototype-1-front.png",
        alt: "2025 prototype 1, front view",
        caption: "2025 prototype 1, front view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2025-prototype-1-top.png",
        alt: "2025 prototype 1, top view",
        caption: "2025 prototype 1, top view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2024-chassis-0-iso.png",
        alt: "2024 chassis 0, isometric view",
        caption: "2024 chassis 0, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2024-chassis-1-iso.png",
        alt: "2024 chassis 1, isometric view",
        caption: "2024 chassis 1, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2024-chassis-2-iso.png",
        alt: "2024 chassis 2, isometric view",
        caption: "2024 chassis 2, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2024-full-assembly-iso.png",
        alt: "2024 full assembly, isometric view",
        caption: "2024 full assembly, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2024-full-assembly-top.png",
        alt: "2024 full assembly, top view",
        caption: "2024 full assembly, top view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2025-electronics-package-iso.png",
        alt: "2025 electronics package, isometric view",
        caption: "2025 electronics package, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2025-packaging-mockup-iso.png",
        alt: "2025 packaging mockup, isometric view",
        caption: "2025 packaging mockup, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2025-scooper-iso.png",
        alt: "2025 scooper, isometric view",
        caption: "2025 scooper, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/cad/2025-wheel-iso.png",
        alt: "2025 wheel, isometric view",
        caption: "2025 wheel, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/warman-attempts/repo/render/2024/Chassis 2 assembly.jpg",
        alt: "Assembly and packaging view for Warman Challenge Robots",
        caption: "Assembly-focused view emphasising packaging, access, and prototype fit-up."
      },
      {
        src: "assets/images/projects/warman-attempts/repo/render/2024/Chassis 2 did not work.png",
        alt: "Diagnostics and lessons-learned layout for Warman Challenge Robots",
        caption: "Failure review board documenting geometry problems, maintenance pain points, and iteration notes."
      }
    ],
    lessonsLearned: [
      "The 2023 entry did not work at all, because its subsystems came together far too late.",
      "The main lesson was project management: bring the subsystems together early instead of finishing each one in isolation.",
      "The first attempt showed that my design skills, not only my time, were the limit. That is why I took on the Test-Bench Vehicle before trying again.",
      "Building mainly from plywood, with less 3D printing, worked in my favour at uni.",
      "CAD confidence is not the same as prototype confidence. Real assembly revealed fastening, stiffness and access problems that were easy to miss on screen."
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
    hiddenImages: [
      "/images/assembly-isometric-view.png",
      "/images/wheel-top-view-final.png"
    ],
    featured: true,
    title: "Mecanum Wheel Study",
    subtitle:
      "An open-source exploration of low-cost, 3D-printable mecanum wheels designed to make holonomic robotics more accessible to students, hobbyists, and educators.",
    year: "2025-2026",
    status: "Open study, first print of the rebuild done",
    projectType: "Solo",
    tags: ["Robotics", "3D Printing", "Mechanisms", "Open Source", "CAD"],
    thumbnail: "assets/images/projects/mecanum-wheel-study/cad/wheel-assembly-latest-iso.png",
    heroImage: "assets/images/projects/mecanum-wheel-study/cad/wheel-assembly-latest-iso.png",
    cardImages: [
      "assets/images/projects/mecanum-wheel-study/cad/wheel-assembly-latest-iso.png",
      "assets/images/projects/mecanum-wheel-study/cad/part-hi4-front.png",
      "assets/images/projects/mecanum-wheel-study/cad/wheel-part-iso.png",
      "assets/images/projects/mecanum-wheel-study/cad/part-hi5-iso.png",
      "assets/images/projects/mecanum-wheel-study/cad/wheel-assembly-earlier-iso.png"
    ],
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
      },
      {
        title: "November 2026 rebuild",
        body:
          "The wheel was remodelled in SolidWorks with a cleaner design tree, so the roller, hub and mounting features are easier to change. The newest assembly in the repository is this iteration.",
        figure: "assets/images/projects/mecanum-wheel-study/cad/wheel-assembly-latest-iso.png"
      },
      {
        title: "Bolted hub and first print of the rebuild",
        body:
          "The hub plate gained four raised bosses around the square drive bore, and four bolts through them now hold the two plates together. One wheel is two hub plates and eight rollers, and all ten parts fit on a single print plate.",
        figure: "assets/images/projects/mecanum-wheel-study/print/bambu-plate-hub-plates-and-rollers.png"
      },
      {
        title: "First print result",
        body:
          "The first plate finished on 20 November 2026. Both hub plates printed, with the bosses, tabs and square bore all formed. The rollers failed: they were printed standing on end, and came out stringy with uneven ends, so they are not usable yet. The rollers need a different print setup before the wheel can be assembled.",
        figure: "assets/images/projects/mecanum-wheel-study/print/first-print-hub-plates-and-rollers.jpg"
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
      media: "https://github.com/John-A-Chen/MechanumWheelStudy/tree/main/images",
      tool: { href: "mecanum-geometry.html", label: "Open Geometry Calculator" }
    },
    gallery: [
      {
        src: "assets/images/projects/mecanum-wheel-study/cad/wheel-assembly-latest-iso.png",
        alt: "Latest wheel assembly, isometric view",
        caption: "Latest wheel assembly, isometric view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/cad/wheel-assembly-latest-front.png",
        alt: "Latest wheel assembly, front view",
        caption: "Latest wheel assembly, front view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/cad/wheel-assembly-latest-right.png",
        alt: "Latest wheel assembly, right view",
        caption: "Latest wheel assembly, right view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/cad/part-hi4-front.png",
        alt: "Hub plate, front view: eight roller tabs, four bolt bosses and the square drive bore",
        caption: "Hub plate, front view: eight roller tabs, four bolt bosses and the square drive bore.",
        group: "Parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/cad/part-hi4-iso.png",
        alt: "Hub plate, isometric view",
        caption: "Hub plate, isometric view.",
        group: "Parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/cad/wheel-part-iso.png",
        alt: "Roller, isometric view",
        caption: "Roller, isometric view.",
        group: "Parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/cad/wheel-part-front.png",
        alt: "Roller, front view",
        caption: "Roller, front view.",
        group: "Parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/print/bambu-plate-hub-plates-and-rollers.png",
        alt: "One wheel on the print plate in Bambu Studio: two hub plates and eight rollers",
        caption: "One wheel on the print plate in Bambu Studio: two hub plates and eight rollers.",
        group: "Printing",
        source: "screenshot"
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/print/first-print-hub-plates-and-rollers.jpg",
        alt: "First print of the rebuilt wheel: two hub plates and eight rollers on a desk mat",
        caption: "First print of the rebuild. The two hub plates printed; the rollers came out stringy and uneven and need reprinting.",
        group: "Printing",
        source: "photo"
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/cad/part-hi5-iso.png",
        alt: "Alternative hub plate (v5), isometric view",
        caption: "Alternative hub plate (v5), isometric view.",
        group: "Earlier iterations",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/mecanum-wheel-study/cad/wheel-assembly-earlier-iso.png",
        alt: "2025 wheel assembly, isometric view",
        caption: "2025 wheel assembly, isometric view.",
        group: "Earlier iterations",
        source: "cad-render"
      }
    ],
    lessonsLearned: [
      "I recently remodelled the wheel with fewer CAD operations. The new part is cleaner and easier to make.",
      "The hardest parts were roller clearance and finding fasteners long enough for the assembly."
    ],
    futureWork: [
      "Reprint the rollers with a setup that holds them down, such as a brim or a different orientation, since the first set failed.",
      "Assemble the wheel and run a roll test. The profile is now circular, so it should roll smoothly.",
      "Add photos of the assembled wheel.",
      "Complete repeated print-and-test cycles using multiple printers and materials to validate the tolerance assumptions.",
      "Measure practical drivetrain behaviour under load to compare the printable design against commercial wheels.",
      "Add assembly documentation and troubleshooting notes targeted at first-time student builders."
    ],
    relatedProjects: ["test-bench-vehicle", "robo-arm"]
  },
  {
    slug: "robo-arm",
    featured: true,
    title: "Four-Bar Robot Hand",
    subtitle: "A 3D-printable robot hand whose fingers are driven by four-bar linkages, developed over five CAD iterations from a published prosthetic hand design.",
    year: "2024-2025",
    status: "Fingers designed, thumb in progress",
    projectType: "Solo",
    tags: [
      "Robotics",
      "Mechanisms",
      "Four-Bar Linkage",
      "CAD",
      "3D Printing"
    ],
    thumbnail: "assets/images/projects/robo-arm/cad/iteration-5-hand-iso.png",
    heroImage: "assets/images/projects/robo-arm/cad/iteration-5-hand-iso.png",
    cardImages: [
      "assets/images/projects/robo-arm/cad/iteration-5-hand-iso.png",
      "assets/images/projects/robo-arm/cad/iteration-1-finger-iso.png",
      "assets/images/projects/robo-arm/cad/iteration-2-assembly-iso.png",
      "assets/images/projects/robo-arm/cad/iteration-3-hand-iso.png",
      "assets/images/projects/robo-arm/cad/iteration-4-hand-iso.png",
      "assets/images/projects/robo-arm/cad/iteration-4-thumb-iso.png",
      "assets/images/projects/robo-arm/cad/iteration-5-finger-iso.png"
    ],
    summary: "Each finger curls through a four-bar linkage, so one input moves the whole finger. Every iteration improved clearance and range of motion. The thumb is still unsolved.",
    overview: [
      "This project is a robot hand built around four-bar linkage fingers. It started from a published design for a 3D-printed prosthetic hand and reworks the linkage geometry in SolidWorks.",
      "The CAD runs through five iterations, from a single finger to a multi-finger hand. Each one adjusted the linkage to give more clearance between parts and a wider range of motion."
    ],
    problem: [
      "A finger has several joints, and putting an actuator on each one makes a hand heavy and complicated. A four-bar linkage couples the joints so a single input curls the whole finger.",
      "The published design gave a starting geometry. The work here was improving its clearance and range of motion while keeping the parts printable."
    ],
    role: [
      "Reworked the four-bar finger linkage from the published design",
      "Modelled the fingers and hand assemblies in SolidWorks across five iterations",
      "Exported parts for 3D printing"
    ],
    process: [
      {
        title: "Iteration 1: a single finger",
        body: "The first model reproduced one linkage-driven finger to understand how the published geometry moves."
      },
      {
        title: "Iterations 2 and 3: from finger to hand",
        body: "The finger was built into an assembly and then into a full hand layout."
      },
      {
        title: "Iterations 4 and 5: refinement and the thumb",
        body: "Later iterations reworked the linkage for more clearance and range of motion, and included attempts at a thumb, which is not yet resolved."
      }
    ],
    technicalHighlights: [
      {
        title: "Four-bar finger linkage",
        body: "Each finger is a four-bar linkage, so its joints move together from one input instead of needing an actuator at every joint."
      },
      {
        title: "Clearance and range of motion",
        body: "The main changes between iterations were to stop links colliding with each other and to let the finger travel further."
      }
    ],
    tools: [
      "SolidWorks",
      "3D printing",
      "GitHub"
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
        src: "assets/images/projects/robo-arm/cad/iteration-5-hand-iso.png",
        alt: "Iteration 5 hand, isometric view",
        caption: "Iteration 5 hand, isometric view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/robo-arm/cad/iteration-5-hand-front.png",
        alt: "Iteration 5 hand, front view",
        caption: "Iteration 5 hand, front view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/robo-arm/cad/iteration-5-hand-right.png",
        alt: "Iteration 5 hand, right view",
        caption: "Iteration 5 hand, right view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/robo-arm/cad/iteration-1-finger-iso.png",
        alt: "Iteration 1 finger, isometric view",
        caption: "Iteration 1 finger, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/robo-arm/cad/iteration-2-assembly-iso.png",
        alt: "Iteration 2 assembly, isometric view",
        caption: "Iteration 2 assembly, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/robo-arm/cad/iteration-3-hand-iso.png",
        alt: "Iteration 3 hand, isometric view",
        caption: "Iteration 3 hand, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/robo-arm/cad/iteration-4-hand-iso.png",
        alt: "Iteration 4 hand, isometric view",
        caption: "Iteration 4 hand, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/robo-arm/cad/iteration-4-thumb-iso.png",
        alt: "Iteration 4 thumb, isometric view",
        caption: "Iteration 4 thumb, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/robo-arm/cad/iteration-5-finger-iso.png",
        alt: "Iteration 5 finger, isometric view",
        caption: "Iteration 5 finger, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/robo-arm/repo/docs/GEN1 compare GEN2.jpg",
        alt: "Four-Bar Robot Hand assembly render",
        caption: "Generation overview render showing the lightweight arm architecture and linkage placement."
      },
      {
        src: "assets/images/projects/robo-arm/repo/docs/GEN2 Extended.jpg",
        alt: "Four-bar linkage geometry study for the robot hand",
        caption: "Mechanism study focused on leverage management and actuator efficiency through the motion range."
      },
      {
        src: "assets/images/projects/robo-arm/repo/docs/progress check.png",
        alt: "Comparison between Gen 1 and Gen 2 hand designs",
        caption: "Side-by-side comparison used to evaluate whether the revised geometry improved the design goals."
      }
    ],
    lessonsLearned: [
      "Each generation works from a published design, improving the clearance and range of motion of its linkage: Abdul Wahit et al., <a class=\"text-link\" href=\"https://www.mdpi.com/1424-8220/20/15/4174\" target=\"_blank\" rel=\"noreferrer\">3D Printed Robot Hand Structure Using Four-Bar Linkage Mechanism for Prosthetic Application</a>, Sensors, 2020.",
      "I designed several fingers but have not yet worked out a thumb."
    ],
    futureWork: [
      "Design a thumb to go with the existing fingers.",
      "Print the latest iteration and check its motion against the CAD.",
      "Add actuation and control once the mechanical design is settled."
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
    thumbnail: "assets/images/projects/test-bench-vehicle/cad/chassis-7-iso.png",
    heroImage: "assets/images/projects/test-bench-vehicle/cad/chassis-7-iso.png",
    cardImages: [
      "assets/images/projects/test-bench-vehicle/cad/chassis-7-iso.png",
      "assets/images/projects/test-bench-vehicle/cad/frame-iso.png",
      "assets/images/projects/test-bench-vehicle/cad/frontside-iso.png",
      "assets/images/projects/test-bench-vehicle/cad/rear-assembly-iso.png",
      "assets/images/projects/test-bench-vehicle/cad/steering-linkage-iso.png",
      "assets/images/projects/test-bench-vehicle/cad/wheel-mount-iso.png"
    ],
    summary: "Designed in four days and built in two and a half for UTS Tech Fest 2024, as a platform to carry the autonomous sensor suite before the team had a software stack to run on it.",
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
        src: "assets/images/projects/test-bench-vehicle/cad/chassis-7-iso.png",
        alt: "Chassis 7, isometric view",
        caption: "Chassis 7, isometric view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/test-bench-vehicle/cad/chassis-7-front.png",
        alt: "Chassis 7, front view",
        caption: "Chassis 7, front view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/test-bench-vehicle/cad/chassis-7-top.png",
        alt: "Chassis 7, top view",
        caption: "Chassis 7, top view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/test-bench-vehicle/cad/chassis-7-right.png",
        alt: "Chassis 7, right view",
        caption: "Chassis 7, right view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/test-bench-vehicle/cad/frame-iso.png",
        alt: "Frame, isometric view",
        caption: "Frame, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/test-bench-vehicle/cad/frontside-iso.png",
        alt: "Frontside, isometric view",
        caption: "Frontside, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/test-bench-vehicle/cad/rear-assembly-iso.png",
        alt: "Rear assembly, isometric view",
        caption: "Rear assembly, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/test-bench-vehicle/cad/steering-linkage-iso.png",
        alt: "Steering linkage, isometric view",
        caption: "Steering linkage, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/test-bench-vehicle/cad/wheel-mount-iso.png",
        alt: "Wheel mount, isometric view",
        caption: "Wheel mount, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
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
      "I designed the whole vehicle in four days and it was built in two and a half, in time for Tech Fest 2024.",
      "Everything was mounted, but the platform was built before the team had a software stack to run on it.",
      "With under a week from start to finish, assembly order was the hardest thing to get right.",
      "Most of the design decisions were about how parts mount to the base board and which material to use for each, plywood or acrylic."
    ],
    futureWork: [
      "Rebuild it almost entirely from 3D-printed parts.",
      "Expand the sensor stack and improve wiring/electronics integration for repeated autonomous experiments.",
      "Refine the platform into a more durable second-generation chassis while preserving mounting flexibility.",
      "Develop a cleaner validation workflow for perception, control, and field testing on the vehicle."
    ],
    relatedProjects: ["mecanum-wheel-study", "warman-attempts"]
  },
  {
    slug: "helical-heat-exchanger",
    course: "41057 Thermofluids A",
    featured: false,
    title: "Helical Heat Exchanger",
    subtitle: "A shell-and-tube heat exchanger with a helical baffle, designed in SolidWorks with one teammate for Thermofluids A, then 3D printed.",
    year: "2024",
    status: "Completed coursework, 3D printed",
    projectType: "Project",
    tags: ["Heat Transfer", "Thermofluids", "SolidWorks", "3D Printing"],
    thumbnail: "assets/images/projects/helical-heat-exchanger/cad/final-assembly-iso.png",
    heroImage: "assets/images/projects/helical-heat-exchanger/cad/final-assembly-iso.png",
    cardImages: [
      "assets/images/projects/helical-heat-exchanger/cad/final-assembly-iso.png",
      "assets/images/projects/helical-heat-exchanger/cad/assembled-he2-iso.png",
      "assets/images/projects/helical-heat-exchanger/cad/helical-end-iso.png",
      "assets/images/projects/helical-heat-exchanger/cad/helical-interior-iso.png",
      "assets/images/projects/helical-heat-exchanger/cad/helical-pipe-grid-iso.png",
      "assets/images/projects/helical-heat-exchanger/cad/helical-shell-iso.png"
    ],
    summary: "A tube bundle inside a flanged shell, with one continuous helical baffle guiding the shell-side flow. I modelled everything except the baffle, and we printed the final design.",
    overview: [
      "The brief was to design a heat exchanger that takes hot wastewater from an industrial process and cools it against a cold-water stream, improving on the concentric-tube unit tested in the lab. Each team had to build an analytical model, model the design in SolidWorks, simulate the heat transfer, and 3D print the final design.",
      "I did this with one teammate. Our design is a shell-and-tube exchanger: a bundle of 19 tubes inside a cylindrical shell, with a single helical baffle winding around the tubes so the shell-side water follows a spiral path across them instead of flowing straight through. My teammate modelled the helical baffle and I did the rest."
    ],
    problem: [
      "A plain concentric-tube exchanger has limited surface area and a short contact path between the two streams. The task was to propose a design with better thermal performance for the same duty: cooling hot wastewater before discharge while pre-heating water for the next process stage.",
      "Our approach was to maximise heat-transfer surface area without resorting to a gyroid structure."
    ],
    role: [
      "Modelled the shell, tube bundle, end caps and final assembly in SolidWorks",
      "Designed the plate heat exchanger concept, which we did not build",
      "My teammate modelled the helical baffle"
    ],
    process: [
      {
        title: "Lab baseline",
        body: "The subject's lab work used a concentric-tube rig run in parallel and counter flow, varying the hot supply temperature and the cold flow rate, to give a measured baseline for the design."
      },
      {
        title: "Plate concept",
        body: "I first designed a stacked plate exchanger clamped between bolted end plates. It stayed in CAD and was never built."
      },
      {
        title: "Helical shell-and-tube design",
        body: "We went with the shell-and-tube layout and a helical baffle instead, and this became the final assembly."
      },
      {
        title: "Printing",
        body: "The shell, end caps and bores were exported as STL and 3MF files and 3D printed. The shell parts were on the print bed on 5 November 2024."
      }
    ],
    technicalHighlights: [
      {
        title: "Helical baffle",
        body: "One continuous perforated helix takes the place of a stack of separate flat baffles, and the tubes pass through the holes in it. This part was modelled by my teammate."
      },
      {
        title: "Flanged shell and end caps",
        body: "The shell has two side ports and flanged ends. Each end cap has a tube sheet matching the tube pattern and a single port for the tube-side stream."
      },
      {
        title: "Fluid volumes",
        body: "The hot and cold water volumes were modelled as separate bodies and exported as STEP files alongside the solid parts."
      }
    ],
    tools: ["SolidWorks", "3D printing"],
    links: {
      repo: null,
      cad: null,
      drawings: null,
      print: null,
      docs: null,
      media: null
    },
    gallery: [
      {
        src: "assets/images/projects/helical-heat-exchanger/photos/printed-exchanger-end-view.jpg",
        alt: "3D printed heat exchanger seen from one end",
        caption: "The printed exchanger from one end, with the tube bundle inside the shell.",
        group: "Photos"
      },
      {
        src: "assets/images/projects/helical-heat-exchanger/photos/print-in-progress-camera.jpg",
        alt: "Printer camera view of the shell parts printing",
        caption: "Shell parts on the print bed, 5 November 2024.",
        group: "Photos"
      },
      {
        src: "assets/images/projects/helical-heat-exchanger/cad/final-assembly-iso.png",
        alt: "Final assembly, isometric view",
        caption: "Final assembly, isometric view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/helical-heat-exchanger/cad/final-assembly-front.png",
        alt: "Final assembly, front view",
        caption: "Final assembly, front view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/helical-heat-exchanger/cad/final-assembly-top.png",
        alt: "Final assembly, top view",
        caption: "Final assembly, top view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/helical-heat-exchanger/cad/final-assembly-right.png",
        alt: "Final assembly, right view",
        caption: "Final assembly, right view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/helical-heat-exchanger/cad/assembled-he2-iso.png",
        alt: "Assembled he2, isometric view",
        caption: "Assembled he2, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/helical-heat-exchanger/cad/helical-end-iso.png",
        alt: "Helical end, isometric view",
        caption: "Helical end, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/helical-heat-exchanger/cad/helical-interior-iso.png",
        alt: "Helical interior, isometric view",
        caption: "Helical interior, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/helical-heat-exchanger/cad/helical-pipe-grid-iso.png",
        alt: "Helical pipe grid, isometric view",
        caption: "Helical pipe grid, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/helical-heat-exchanger/cad/helical-shell-iso.png",
        alt: "Helical shell, isometric view",
        caption: "Helical shell, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      }
    ],
    lessonsLearned: [
      "Only the helical design was built. The plate exchanger stayed a CAD concept.",
      "The printed helical exchanger got us good marks for the project.",
      "The exchanger was built but never tested. Its performance was assessed through simulation only.",
      "Getting the simulation of my plate design to run was the hardest part."
    ],
    futureWork: [],
    relatedProjects: ["mecanum-wheel-study", "robo-arm"]
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
    course: "41013 Industrial Robotics",
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
      "Built the simulation environment and the mesh models",
      "Worked out the DH parameters for the robot models",
      "Wrote much of the trajectory code",
      "Wrote the script for the team's project video"
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
      "Clear UI pathways (free control, sequence, E-stop, controller mode) materially improved demo reliability under assignment time pressure.",
      "The welding cell ran in simulation only.",
      "The Sensors and Controls extension was about hand-eye calibration: establishing the spatial relationship between a camera and the end effector of a Dobot Magician, then tracking a pattern to guide the robot.",
      "Hand-eye calibration was the hardest part to get working."
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
    course: "41069 Robotics Studio 2",
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
      "Calibration is not a side task; the TF chain determines whether a visually correct detection can become a robot-usable pose.",
      "The hardest problem was getting things in Unity to match what ROS 2 reported.",
      "At the UTS Tech Fest demo I spoke with a lot of industry guests and the response was good, though the project did not win an award.",
      "The subject plans to run the project again next year so the next cohort can build on it."
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
    course: "41118 Artificial Intelligence in Robotics",
    featured: true,
    title: "HoloAssist AI: Grasping Add-on",
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
      "Built all of the MuJoCo simulation work",
      "Designed and trained the staged manipulation policies",
      "Website and documentation development for the HoloAssist-AI public project site",
      "Cross-linking the AI extension with the base HoloAssist perception and calibration work"
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
      "Cross-linking the AI project to the base HoloAssist stack makes the semester sequence much clearer.",
      "The policies were never run on the real arm, because we were not allowed to.",
      "Gazebo cannot run environments in parallel unless it is headless, and a headless run cannot be checked by eye, so we used other methods for training."
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
    course: "41068 Robotics Studio 1",
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
      "Wrote all the control code for the Husky",
      "Built the operator GUI",
      "Set up the camera and the lidar approximation",
      "Forest world pipeline development using terrain meshes and generated tree layouts"
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
      "Procedural environment generation becomes more useful when mesh alignment and asset paths are handled in scripts, not manual edits.",
      "The state machine only came together the night before the demo.",
      "If I started again I would begin with the Husky rather than a drone. Getting a drone URDF working cost time we did not have."
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
    hiddenImages: [
      "/screenshots/Enclosure 0 CAD",
      "/screenshots/Enclosure 1 CAD",
      "/screenshots/Enclosure 2 CAD",
      "/screenshots/Enclosure 3 CAD"
    ],
    featured: true,
    title: "STM32 Desk Cube",
    subtitle:
      "A compact STM32L476-based battery-powered desk device PCB, combining USB-C input, LiPo charging, 3.3 V regulation, display hardware, sensors, feedback components, enclosure CAD, and manufacturing exports.",
    year: "2026",
    status: "Board ordered, bring-up on hold",
    projectType: "Solo",
    tags: ["PCB Design", "STM32", "Embedded Hardware", "Altium", "Enclosure CAD"],
    thumbnail: "assets/images/projects/john-stm/cad/enclosure-assembly-iso.png",
    heroImage: "assets/images/projects/john-stm/cad/enclosure-assembly-iso.png",
    cardImages: [
      "assets/images/projects/john-stm/cad/enclosure-assembly-iso.png",
      "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Mockup A.png",
      "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Mockup B.png"
    ],
    summary: "Started as a Pomodoro timer and grew into a general desk device: clock, timer and desk toy in one. The board has been ordered, but the wrong parts arrived, so bring-up is on hold for now.",
    overview: [
      "The STM32 Desk Cube is a compact STM32L476-based hardware project built around a small battery-powered desk device. The repository contains Altium source files, generated PCB outputs, SolidWorks enclosure models, STEP/DXF exports, reusable part models, display module references, production files, and screenshots of PCB and enclosure iterations.",
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
        src: "assets/images/projects/john-stm/cad/enclosure-assembly-iso.png",
        alt: "Enclosure assembly, isometric view",
        caption: "Enclosure assembly, isometric view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/john-stm/cad/enclosure-assembly-front.png",
        alt: "Enclosure assembly, front view",
        caption: "Enclosure assembly, front view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/john-stm/cad/enclosure-assembly-top.png",
        alt: "Enclosure assembly, top view",
        caption: "Enclosure assembly, top view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/john-stm/cad/enclosure-assembly-right.png",
        alt: "Enclosure assembly, right view",
        caption: "Enclosure assembly, right view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/john-stm/altium/pcb-layout-print-1.png",
        alt: "PCB layout print from Altium, first board",
        caption: "PCB layout print from Altium, first board.",
        group: "Altium",
        source: "altium-pdf"
      },
      {
        src: "assets/images/projects/john-stm/altium/pcb-layout-print-2.png",
        alt: "PCB layout print from Altium, second board",
        caption: "PCB layout print from Altium, second board.",
        group: "Altium",
        source: "altium-pdf"
      },
      {
        src: "assets/images/projects/john-stm/altium/schematic-mcu.png",
        alt: "MCU schematic sheet",
        caption: "MCU schematic sheet.",
        group: "Altium",
        source: "altium-pdf"
      },
      {
        src: "assets/images/projects/john-stm/altium/schematic-power.png",
        alt: "Power schematic sheet: battery sense, charger and 3.3 V regulator",
        caption: "Power schematic sheet: battery sense, charger and 3.3 V regulator.",
        group: "Altium",
        source: "altium-pdf"
      },
      {
        src: "assets/images/projects/john-stm/altium/schematic-peripherals.png",
        alt: "Peripherals schematic sheet",
        caption: "Peripherals schematic sheet.",
        group: "Altium",
        source: "altium-pdf"
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Mockup A.png",
        alt: "STM32 Desk Cube PCB2 mockup view",
        caption: "PCB2 mockup showing the compact board direction after layout iteration."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Front.png",
        alt: "STM32 Desk Cube PCB2 front view",
        caption: "Front board view used to review component placement and routing density."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Top Signal Layer.png",
        alt: "STM32 Desk Cube PCB2 top signal layer",
        caption: "Top signal layer view for routing and component-side layout review."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/PCB2 Ground Layer.png",
        alt: "STM32 Desk Cube PCB2 ground layer",
        caption: "Ground layer view used to check return-path quality and plane continuity."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/Enclosure 3 Fitment.jpg",
        alt: "STM32 Desk Cube enclosure fitment photo",
        caption: "Printed enclosure fitment check for the display and internal hardware."
      },
      {
        src: "assets/images/projects/john-stm/repo/docs/screenshots/Enclosure 3 Buzzer Haptic.jpg",
        alt: "STM32 Desk Cube buzzer and haptic fitment",
        caption: "Buzzer and haptic motor placement review inside the enclosure."
      },
      {
        src: "assets/images/projects/john-stm/repo/hardware/parts/display-1-69-st7789v2/snapshot/Top Display 1.69 ST7789V2.jpg",
        alt: "STM32 Desk Cube ST7789V2 display top side",
        caption: "1.69 inch ST7789V2 display module reference used for packaging and interface planning."
      }
    ],
    lessonsLearned: [
      "It began as a Pomodoro timer and grew into a broader desk device as I kept adding to it.",
      "The hardest part was learning via-in-pad, power design and placement. Routing around the microcontroller was straightforward. Arranging the functional blocks so they sit well together was the harder problem.",
      "The first order arrived with the wrong parts, so the board has not been powered up yet.",
      "A top-layer ground pour does not replace deliberate via placement when an internal ground plane is available."
    ],
    futureWork: [
      "Use polygon pours more deliberately, now that I have learned them properly this semester.",
      "Do impedance calculations for the routed signals.",
      "Clean up the silkscreen so the board is easier to read and assemble.",
      "Order the correct parts, then bring the board up one subsystem at a time, starting with the 3.3 V rail."
    ],
    relatedProjects: ["solid-connections", "robo-arm"]
  },
  {
    slug: "solid-connections",
    hiddenImages: [
      "/Assets/Fonts/",
      "/Firmware/Vendor/",
      "photo-team-member-portrait"
    ],
    course: "41070 Embedded Mechatronics Studio 2",
    featured: true,
    title: "ESP32 Step Tracker",
    subtitle: "A wearable ESP32 step tracker with a custom two-layer PCB, an analogue-filtered ADXL335 accelerometer, an OLED menu interface, and a 3D-printed Tamagotchi-style enclosure. Built by team Solid Connections.",
    year: "2025-2026",
    status: "Private repository, documented case study",
    projectType: "Project",
    tags: [
      "ESP32",
      "PCB Design",
      "Embedded Firmware",
      "Analogue Filtering",
      "Enclosure CAD"
    ],
    thumbnail: "assets/images/projects/solid-connections/cad/device-assembly-iso.png",
    heroImage: "assets/images/projects/solid-connections/cad/device-assembly-iso.png",
    cardImages: [
      "assets/images/projects/solid-connections/cad/device-assembly-iso.png",
      "assets/images/projects/solid-connections/cad/electronics-package-iso.png"
    ],
    summary: "Counts steps, tells walking from running, and keeps the count through power loss. Tested at under 5% step-count error on one-minute walks and runs.",
    overview: [
      "The Compact Step Tracker (CST-01) is a wearable motion-sensing device built by a four-person team, Solid Connections. An ESP32 reads an ADXL335 analogue accelerometer through a filter stage on a custom PCB, shows results on a 0.96 inch OLED, and is operated with three buttons and three status LEDs. It runs from a 9 V battery or an external supply through a barrel jack, and weighs 124.9 g in its 3D-printed enclosure.",
      "The firmware has five modes: Sleep, Walking, Calibration, Self-Test and Battery. Walking mode counts walking and running steps separately, estimates calories burned, and saves the total to flash memory after every step so it survives a reboot."
    ],
    problem: [
      "The brief was a step tracker that can tell whether the wearer is stationary, walking or running, count their steps, and be comfortable and simple to use.",
      "That meant getting four things to work together in one small device: a clean accelerometer signal, a board that fits a wearable case, firmware that separates real steps from noise, and a simple interface."
    ],
    role: [
      "Integration lead in a four-person team",
      "Designed the I/O and battery-monitoring subcircuit",
      "Wrote the walking-pace routine that classifies motion as stationary, walking or running",
      "Presented the design with the team across four design reviews and a final review"
    ],
    process: [
      {
        title: "Design 1: proof of concept",
        body: "An Arduino Uno/Nano, a 9 V battery, a single-layer board and a basic second-order filter in a simple box. There was no user interface yet, and the connections were convoluted with no real microcontroller integration."
      },
      {
        title: "Design 2: moving to the ESP32",
        body: "Switched to an ESP32 and a two-layer board, added buttons and an OLED, and moved to a Sallen-Key second-order filter. This revision had incorrect ADXL335 pin assignments and headers, and the filter had no buffer amplifier. The Tamagotchi-style enclosure idea came from this stage."
      },
      {
        title: "Design 3: corrected and complete",
        body: "Fixed the accelerometer connections and ESP32 pin alignment, added a buffer amplifier to the filter, and implemented the full interface of buttons, OLED and LEDs. The enclosure was refined to be more ergonomic."
      },
      {
        title: "Enclosure prototypes 1 to 4",
        body: "The enclosure was reworked when the PCB became double-sided, then gained M3 threaded inserts, button caps, an LED diffuser, an embossed logo, battery mounting and a USB port cover, with the geometry cleaned up for easy assembly."
      },
      {
        title: "Testing the assembled device",
        body: "Integration tests used an oscilloscope, a multimeter and the Arduino serial plotter. System tests were one-minute walks and runs with the Revision 2 PCB in its enclosure, comparing the device's count against steps counted by the wearer."
      }
    ],
    technicalHighlights: [
      {
        title: "Analogue filter on the accelerometer",
        body: "Each axis passes through a Sallen-Key second-order low-pass filter with a buffer amplifier. The design review lists 160 kΩ resistors, 33 nF capacitors and a 30 Hz cut-off. The filtered Z axis is also brought out on a BNC connector so the signal can be analysed directly."
      },
      {
        title: "Double-sided board",
        body: "Through-hole parts sit on top and surface-mount parts underneath. The ADXL335 is mounted on top with its filter on the other side under the ESP32 to save space, and the board edges are bevelled."
      },
      {
        title: "Step detection",
        body: "A threshold algorithm on acceleration magnitude classifies steps as walking (about 0.7 g) or running (about 2.2 g). Requiring two consecutive threshold crossings and tuning the detection window for typical walking and running speeds removed most false counts, and accelerations above 5 g are rejected."
      },
      {
        title: "Calibration and self-test",
        body: "Calibration holds the device at +1 g and -1 g on each axis for 5 seconds and averages 100 samples to find the zero-g offset and sensitivity. Self-test toggles the ADXL335 self-test pin and compares the voltage change on each axis with the expected datasheet values."
      },
      {
        title: "Battery monitoring",
        body: "A P-MOSFET switches the battery sense divider on only while Battery mode is active, so measuring the battery does not drain it. Voltages from 6.0 V to 9.0 V are read to within 0.2 V and shown as a percentage on the OLED and as a level on the LEDs."
      }
    ],
    tools: [
      "ESP32-WROOM-32",
      "ADXL335 accelerometer",
      "SSD1306 OLED",
      "Altium Designer",
      "SolidWorks",
      "Arduino C"
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
        src: "assets/images/projects/solid-connections/cad/device-assembly-iso.png",
        alt: "Device assembly, isometric view",
        caption: "Device assembly, isometric view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/solid-connections/cad/device-assembly-front.png",
        alt: "Device assembly, front view",
        caption: "Device assembly, front view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/solid-connections/cad/device-assembly-top.png",
        alt: "Device assembly, top view",
        caption: "Device assembly, top view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/solid-connections/cad/device-assembly-right.png",
        alt: "Device assembly, right view",
        caption: "Device assembly, right view.",
        group: "CAD views",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/solid-connections/cad/electronics-package-front.png",
        alt: "Electronics package, front view",
        caption: "Electronics package, front view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/solid-connections/cad/electronics-package-iso.png",
        alt: "Electronics package, isometric view",
        caption: "Electronics package, isometric view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/solid-connections/cad/electronics-package-top.png",
        alt: "Electronics package, top view",
        caption: "Electronics package, top view.",
        group: "Sub-assemblies and parts",
        source: "cad-render"
      },
      {
        src: "assets/images/projects/solid-connections/altium/pcb-layout-print.png",
        alt: "PCB layout print from Altium",
        caption: "PCB layout print from Altium.",
        group: "Altium",
        source: "altium-pdf"
      },
      {
        src: "assets/images/projects/solid-connections/altium/schematic-top-level.png",
        alt: "Top-level schematic sheet",
        caption: "Top-level schematic sheet.",
        group: "Altium",
        source: "altium-pdf"
      },
      {
        src: "assets/images/projects/solid-connections/altium/schematic-ui-interface.png",
        alt: "User interface schematic sheet: buttons, LEDs and display",
        caption: "User interface schematic sheet: buttons, LEDs and display.",
        group: "Altium",
        source: "altium-pdf"
      },
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
      "Step counts were within 5% of hand-counted steps on one-minute walks and runs.",
      "Counting through a change between walking and running was weaker, at up to 15% deviation.",
      "Calibration came within 10% of the ADXL335 datasheet values after increasing to 100 samples over 5 seconds.",
      "Step counts persisted across 10 reboots, and mode switching held up through more than 50 rapid button presses with 100 ms debouncing.",
      "One bug was never resolved: self-test fails when the Z axis points in the positive direction. The same code passes on other step trackers and replacing the accelerometer did not fix it, leaving a circuit error as the likely cause."
    ],
    futureWork: [
      "Find the cause of the Z-axis self-test failure.",
      "Improve step counting across walk-to-run transitions, the weakest test result."
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
