import {
    Controller,
    Get,
    Param,
} from '@nestjs/common'
import { NewsService } from './news.service'

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) { }

    @Get()
    findAll() {
        return this.newsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.newsService.findOne(id)
    }

    @Get('secondary')
    findAllSecondaryNews() {
        return this.newsService.findAllSecondaryNews()
    }
}
