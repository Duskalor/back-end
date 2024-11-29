import { Router } from 'express';
import { VideoController } from '../controller/VideoController';
import { VideoService } from '../services/videoService';

const video = Router();
const videoService = new VideoService();
const videoController = new VideoController(videoService);

video.get('/', videoController.getVideos);
video.post('/create', videoController.createVideo);
video.delete('/delete/:id', videoController.deleteVideo);
video.put('/update/:id', videoController.updateVideo);
video.get('/:id', videoController.getVideoById);

export { video };
