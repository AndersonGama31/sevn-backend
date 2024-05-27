import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { News } from './entities/news.entity';
import { NewsDTO, Topics } from 'src/types';

@Injectable()
export class NewsService {
    private readonly news: NewsDTO;
    private readonly secondaryNews: News[]
    constructor() {
        this.news = {
            headline: {
                id: randomUUID(),
                title: "Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC",
                subtitle: "Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.",
                date: new Date().toISOString(),
                topic: Topics.ECONOMY,
                image: "https://s2.glbimg.com/1Y2V9xjZv6K7Zk9O5b2V3Q9dY6I=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/8/0/9u4Q4oQ6k9aB4JQVHb9g/2021-08-24t190000z-1500913834-rc2m7m9j5z1v-rtrmadp-3-brazil-economy.jpg",
                content: `
                                <!DOCTYPE html>
                            <html lang="pt-BR">
                            <head>
                                <meta charset="UTF-8">
                                <title>Banco Central libera consulta a dinheiro esquecido em bancos</title>
                            </head>
                            <body>
                                <h1>Banco Central libera consulta a dinheiro esquecido em bancos </h1>
                                </br>
                                </br>
                                <p>O Banco Central informou nesta segunda-feira (14) que quem não tiver valores a receber nesta etapa das consultas ao novo site de consulta aos recursos 'esquecidos' nos bancos poderá eventualmente ter nas próximas fases do sistema. </p>
                                </br>
                                </br>
                                <p>Muitos clientes que acessam o sistema têm recebido a mensagem para retornar a consulta em 2 de maio (veja na imagem mais abaixo).</p>
                                </br>
                                </br>
                                <p>"Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases", informou o BC ao ser questionado pelo g1. Isso acontece porque, ao todo, os bancos têm R$ 8 bilhões a devolver aos clientes. Mas, nesta primeira fase, foram abertas consultas referentes à metade, R$ 4 bilhões. </p>
                                </br>
                                </br>
                                <p>Banco Central libera consulta de dinheiro ‘esquecido’ em bancos: saiba como fazer </p>
                                </br>
                                </br>
                                <p>Em 2 de maio, as consultas a uma nova fase serão abertas. O BC não informou, no entanto, se todos os R$ 4 bilhões restantes serão liberados para consultas nesta segunda fase. Em janeiro, no entanto, o BC afirmou que todos os recursos seriam liberados 'ao longo de 2022'. </p>
                                </br>
                                </br>
                                <p>Página do BC informa que cidadão sem valores a receber atualmente poderá fazer nova consulta a partir de maio. </p>
                            </body>
                            </html>

                `
            },
            illustrated_news: [
                {
                    id: randomUUID(),
                    title: "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
                    subtitle: "Pesquisa mostra que 76% dos pais de crianças de até 9 anos acham que os filhos precisam de reforço na alfabetização. 60% dos pais de alunos do ensino fundamental dizem que os filhos tiveram dificuldades com o ensino remoto.",
                    date: new Date().toISOString(),
                    topic: Topics.EDUCATION,
                    image: "https://s3-alpha-sig.figma.com/img/4860/b62c/5f89d5f732924bb3a0b37dccc69459e2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnRGIa6fjSVTdZh~b~Krxm1HJbaWHIHDNrE-S9YwnxANW-1AhywwKb5AXdciC5-yXMNEOhO6cpCtPcTF0OZQO6I8yOozhuoNKjwUVydTwc3BgGs7dl1Un2kpvkM5dtOqXdazzbYU5CLM5~dh3KdKctX3FeESXfHE-XJ0ftMjIrdpBanGmhmil0uvpJct5f~CJQcXt9MVq0fuamTxV0H6m5OttVKlqRHvIVgPPooL0~oJkpZoaB92L1paX9pQar7kRwlSvgNUHT9g7doe-Op-a-1S08WdkvwWMFQzGAPQR7eLs2JtDA5AaZqmKEWZZp1v5PgYKkmpVSn6JhuzAPAr0w__",
                    content: 'Empty content'
                },
                {
                    id: randomUUID(),
                    title: "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje",
                    subtitle: "O sorteio do concurso 2214 da Lotomania acontece nesta terça-feira (15). O prêmio é de R$ 5 milhões para quem acertar as 20 dezenas sorteadas.",
                    date: new Date().toISOString(),
                    topic: Topics.DIVERSITY,
                    image: "https://s3-alpha-sig.figma.com/img/21a6/9033/8c49079302a6944094664e80d3160112?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TwAuz4SldGR7BUK9ODNzxRKuVOP5I8xGMxPQYjm5TNj62ucEgjEA9dFiF7oPDL0SgWXa7MIqWj2Pww7lQdOLXhMt2jdQiqcDg6z2gEnXs5GMJH4Lyh~23Ku8uwsMFGL5Uz8Cn8ozOZqI0wrrSuyBDIZeZj8yXtpdFgG8RvwUhzNyDE8coF690cWEetHlS1lGA2~KBqgoujjf3eXaHh01Srn2sey~dqdGAoGlIx4dvL9Y6sJxW~eumXrQJ4cbpt~Y0txsaXy0f4UONuREREat0UH0UsaAUwDnbvZcDlRNjCbQ8LLnaHvCI4PdaVtb38wx0DtKc6-rURicUKnu5DPKsg__",
                    content: 'Empty content'
                }
            ]
        }


        this.secondaryNews = [
            {
                id: randomUUID(),
                title: "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
                subtitle: "Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.",
                date: new Date().toISOString(),
                topic: Topics.ECONOMY,
                image: null,
                content: 'Empty content'
            },
            {
                id: randomUUID(),
                title: "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
                subtitle: "Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.",
                date: new Date().toISOString(),
                topic: Topics.ECONOMY,
                image: null,
                content: 'Empty content'
            },
            {
                id: randomUUID(),
                title: "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
                subtitle: "Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.",
                date: new Date().toISOString(),
                topic: Topics.ECONOMY,
                image: null,
                content: 'Empty content'
            },
            {
                id: randomUUID(),
                title: "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
                subtitle: "Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.",
                date: new Date().toISOString(),
                topic: Topics.ECONOMY,
                image: null,
                content: 'Empty content'
            },
            {
                id: randomUUID(),
                title: "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
                subtitle: "Pesquisa mostra que 76% dos pais de crianças de até 9 anos acham que os filhos precisam de reforço na alfabetização. 60% dos pais de alunos do ensino fundamental dizem que os filhos tiveram dificuldades com o ensino remoto.",
                date: new Date().toISOString(),
                topic: Topics.EDUCATION,
                image: null,
                content: 'Empty content'
            },
            {
                id: randomUUID(),
                title: "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
                subtitle: "Pesquisa mostra que 76% dos pais de crianças de até 9 anos acham que os filhos precisam de reforço na alfabetização. 60% dos pais de alunos do ensino fundamental dizem que os filhos tiveram dificuldades com o ensino remoto.",
                date: new Date().toISOString(),
                topic: Topics.EDUCATION,
                image: null,
                content: 'Empty content'
            },
            {
                id: randomUUID(),
                title: "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados",
                subtitle: "O sorteio do concurso 2214 da Lotomania acontece nesta terça-feira (15). O prêmio é de R$ 5 milhões para quem acertar as 20 dezenas sorteadas.",
                date: new Date().toISOString(),
                topic: Topics.DIVERSITY,
                image: null,
                content: 'Empty content'
            },
            {
                id: randomUUID(),
                title: "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados",
                subtitle: "O sorteio do concurso 2214 da Lotomania acontece nesta terça-feira (15). O prêmio é de R$ 5 milhões para quem acertar as 20 dezenas sorteadas.",
                date: new Date().toISOString(),
                topic: Topics.DIVERSITY,
                image: null,
                content: 'Empty content'
            }
        ]
    }

    findAll() {
        return this.news;
    }

    findAllSecondaryNews() {
        return this.secondaryNews;
    }

    findOne(id: string) {
        if (this.news.headline.id === id) {
            return this.news.headline;
        }

        for (let news of this.news.illustrated_news) {
            if (news.id === id) {
                return news;
            }
        }

        for (let news of this.secondaryNews) {
            if (news.id === id) {
                return news;
            }
        }
        return null;
    }
}
