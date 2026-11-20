# CAD render tools

Scripts that produce the SolidWorks views used on the project pages.

1. `sw_render.ps1 -JobFile jobs.json` attaches to a running SolidWorks, opens each
   file read-only, saves the listed standard views as BMP, and closes it. Nothing
   is saved back to the CAD files. `jobs_all.json` is the job list last used.
2. `sw_dismiss.ps1` runs alongside it and answers "No" to the CAM add-in's
   "Save changes?" prompt, which otherwise blocks the batch.
3. `sw_diag.ps1 -Paths ...` lists an assembly's components and whether each file
   was found. Use it when a render comes out empty: that means broken references,
   and the fix is to copy the assembly and its parts into one temporary folder.
4. `process_renders.py <renders_dir> <site_dir>` crops each BMP to the model and
   writes a PNG to `assets/images/projects/<slug>/cad/`.
5. `integrate_cad.py <site_dir>` sets each project's hero image, card images and
   grouped gallery entries in `data/projects.js`. It can be re-run.
