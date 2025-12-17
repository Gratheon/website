# Task: Tartu University Students Recognition

## Goal
- Analyze student work from Tartu University (PDF presentations in research/slides/)
- Create LinkedIn post acknowledging their contributions
- Update volunteers page with student names and their impact

## Sub-tasks
- [x] Explore website structure and find research/slides directory
- [x] Extract text from PDF presentations
- [x] Analyze student projects and their contributions
- [x] Read existing volunteer.md and credits.md pages
- [x] Create LinkedIn post draft
- [x] Update credits.md with new student contributors
- [x] Review and finalize changes

## Student Projects Analysis

### Project T30: Detection of different bee types (Vol 2)
**Team:** Kreete Kuusk, Danni Zhang, Jasper Luik, Rasmus Mirma
**Course:** Machine Learning - MTAT.03.227, 2025
**Focus:** Detecting drone bees vs worker bees at beehive entrance
**Results:**
- Trained YOLOv10 model achieving 96.68% precision and 93.32% recall
- Used Mississippi State University dataset with manual review
- Applied copy-paste augmentation for class balancing (2:1 worker to drone ratio)
- Created automatic image splitting pipeline
**GitHub:** https://github.com/KreeteKuusk/Bee-type-detection-ML2025

### Project T14: Hornet Detection at Beehive Entrance
**Team:** Albert Unn, Kadi-Liis Kivi, Karen Roht, Otto Kase
**Focus:** Early detection of hornets attacking beehives
**Results:**
- Trained YOLOv8-nano model achieving 96.7% precision and 91.2% recall
- Manually labeled ~1250 images (expanded to ~3000 with augmentations)
- Created setup guide for Nvidia Jetson edge deployment
- Dockerized the model for production use
**Impact:** Critical for early warning system - hornets can destroy colonies within hours

### Project T41: Detection of bee types on video dataset (P7)
**Team:** Norman Tolmats, Mihkel Kulu, Joonas Tiitson, Markus Kivime
**Focus:** Real-time detection of worker bees, drones, and pollen-carrying bees
**Results:**
- Trained YOLOv11n on manually labeled dataset
- Achieved 97% precision for worker bees and 95% precision for drones
- Explored weakly supervised learning with auto-labeling (30k+ images)
- Optimized for edge deployment
**GitHub:** https://github.com/bukyt/beeDetection

## LinkedIn Post Draft

```
🐝 Grateful for Brilliant Minds: Tartu University Students Advancing Gratheon's Mission

I'm incredibly thankful to share the outstanding work of three student teams from University of Tartu who chose Gratheon as their machine learning course project. Their contributions are moving us closer to our mission of protecting bees through AI-powered monitoring.

**Team T30 - Bee Type Detection (Vol 2)**
Kreete Kuusk, Danni Zhang, Jasper Luik, and Rasmus Mirma developed a YOLOv10 model achieving 96.7% precision in distinguishing drone bees from worker bees. Their sophisticated approach included manual dataset curation, intelligent augmentation strategies, and automatic image splitting - critical for understanding colony health dynamics.

**Team T14 - Hornet Detection System**
Albert Unn, Kadi-Liis Kivi, Karen Roht, and Otto Kase tackled a life-or-death challenge. Hornets can destroy bee colonies within hours. Their YOLOv8-nano model (96.7% precision, 91.2% recall) provides early warning capabilities, manually labeling over 1,250 images and creating production-ready deployment for edge devices.

**Team T41 - Multi-Class Bee Detection on Video**
Norman Tolmats, Mihkel Kulu, Joonas Tiitson, and Markus Kivime pushed the boundaries further by detecting pollen-carrying bees in real-time video streams. Their work on weakly supervised learning and auto-labeling pipelines (30k+ images) demonstrates the future of scalable AI solutions.

What amazes me most is not just the technical excellence, but their commitment to open-source principles and practical deployment. These students went beyond academic requirements - they created production-ready tools that will directly impact beekeepers and their colonies.

To all eleven students: Your work embodies our mission to "harmonize humanity with nature." You've contributed to something bigger than any individual project - you're helping protect pollinators that are essential for global food security.

Thank you for choosing to make a difference. 🌻

#AI #MachineLearning #Conservation #Beekeeping #OpenSource #UniversityOfTartu #StudentWork #ComputerVision
```

## Changes Made
1. ✅ Updated /Users/artjom/git/website/about/credits.md with new section "Machine Learning Research - University of Tartu"
2. ✅ Created LinkedIn post file for reference at /Users/artjom/git/website/linkedin-post-tartu-students.md
3. ✅ Created task tracking file at /Users/artjom/git/website/tartu-university-students-recognition.md
4. ✅ Added acknowledgment of course instructor Dmytro Fishman (Associate Professor) to both LinkedIn post and credits page

## Changed Files
- /Users/artjom/git/website/about/credits.md (updated with 12 new student contributors)
- /Users/artjom/git/website/linkedin-post-tartu-students.md (created)
- /Users/artjom/git/website/tartu-university-students-recognition.md (created)

