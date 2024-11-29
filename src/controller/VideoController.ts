import { Request, Response } from 'express';
import { VideoService } from '../services/videoService';

export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  getVideos = async (req: Request, res: Response) => {
    try {
      const result = await this.videoService.getVideos();
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };

  createVideo = async (req: Request, res: Response) => {
    try {
      const body = req.body;
      console.log({ body });
      const result = await this.videoService.createVideo(body);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };

  deleteVideo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const result = await this.videoService.deleteVideo(id);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };

  updateVideo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const result = await this.videoService.updateVideo(id, body);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };

  getVideoById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const result = await this.videoService.getVideoById(id);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: (error as Error).message });
    }
  };
}
