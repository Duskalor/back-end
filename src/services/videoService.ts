import { Prisma } from '@prisma/client';
import prisma from '../prisma';

export class VideoService {
  getVideos = async () => {
    try {
      return await prisma.video.findMany();
    } catch (error) {
      throw new Error(`Error fetching videos: ${(error as Error).message}`);
    }
  };

  createVideo = async (data: Prisma.VideoCreateInput) => {
    try {
      const newVideo = await prisma.video.create({ data });
      return newVideo;
    } catch (error) {
      throw new Error(`Error creating video: ${(error as Error).message}`);
    }
  };

  deleteVideo = async (id: string) => {
    try {
      await prisma.video.delete({ where: { id } });
      return 'Video deleted successfully';
    } catch (error) {
      throw new Error(`Error deleting video: ${(error as Error).message}`);
    }
  };

  updateVideo = async (id: string, body: any) => {
    try {
      const updatedVideo = await prisma.video.update({
        where: { id },
        data: body,
      });
      return updatedVideo;
    } catch (error) {
      throw new Error(`Error updating video: ${(error as Error).message}`);
    }
  };

  getVideoById = async (id: string) => {
    try {
      return await prisma.video.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(
        `Error fetching video by ID: ${(error as Error).message}`
      );
    }
  };
}
