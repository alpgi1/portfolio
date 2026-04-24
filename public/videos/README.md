# Project demo videos

Drop project demo recordings here. File names referenced from `components/projects/project-data.ts`:

- `regu.mp4`
- `chainsense.mp4`
- `apex-coach.mp4`

Any project without a matching video file will fall back to a "demo video coming soon" placeholder in the modal.

**Recommended specs**

- Format: `.mp4` (H.264 + AAC)
- Resolution: 1280×720 or 1920×1080
- Aspect ratio: 16:9
- Length: 20–45 seconds
- File size: keep under ~8 MB per clip (compress with Handbrake or ffmpeg)

**Alternative:** use `videoEmbed` instead of `video` in `project-data.ts` to embed a YouTube/Vimeo iframe URL — no local file needed.
