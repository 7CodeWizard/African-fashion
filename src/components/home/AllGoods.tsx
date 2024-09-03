import { prisma } from "@/lib/prisma";
import React from "react";

// import { Good } from "@prisma/client";
import GoodItem from "../common/GoodItem";

const fetchGoods = async () => {
    const data = await prisma.good.createMany({
        data: [
            // !Gladden Island - 01
            {
                name: "Gladden Island",
                description:
                    "Um Resort de Ilha Privada Construído para um a dois casais - Tudo está incluído. Um redemoinho de lagoas azul-turquesa e marinhas berço Gladden Private Island, uma ilha rodeada de areia branca a 20 milhas a nordeste de Placencia, no coração da Barreira de Corais de Belize. Esta joia da ilha abriga seu próprio santuário privado, uma vila casualmente elegante projetada para apenas um - dois casais, com o serviço completo de um resort de luxo. Tudo incluído: Todas as refeições preparadas por um chef gourmet, todas as bebidas, incluindo vinhos finos, todas as atividades, incluindo mergulho com snorkel, mergulho e certificação PADI, tratamentos de spa, traslados de e para a cidade de Belize. Incluído no preço para uma estadia de 7 dias está um traslado de helicóptero de ida e volta de 35 minutos sobre o recife de barreira diretamente para Gladden.",
                location: "Cidade de Belize, Belize",
                locationDescription:
                    "Embora a maioria das experiências de ilhas privadas exijam jatos para os confins do mundo, Gladden Private Island oferece a beleza natural e a tranquilidade de um atol polinésio a apenas quatro horas de Miami.",
                countryCode: "BZ",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/01Gladden%20Island/Camada%20157.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAxR2xhZGRlbiBJc2xhbmQvQ2FtYWRhIDE1Ny5wbmciLCJpYXQiOjE2OTYzNjAyNDcsImV4cCI6MjU2MDI3Mzg0N30.Hcwjg8OQjxMAuA_g1s9q-99nSoMJ0p5U0dIIyZvMSiE&t=2023-10-03T19%3A10%3A29.920Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/01Gladden%20Island/Camada%20158.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAxR2xhZGRlbiBJc2xhbmQvQ2FtYWRhIDE1OC5wbmciLCJpYXQiOjE2OTYzNjAyNjcsImV4cCI6MjU2MDI3Mzg2N30.o3N1Y3VzG0IAg_9HnV4cgyINENuZAVr3Ksaj_mhq6KE&t=2023-10-03T19%3A10%3A50.466Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/01Gladden%20Island/Camada%20159.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAxR2xhZGRlbiBJc2xhbmQvQ2FtYWRhIDE1OS5wbmciLCJpYXQiOjE2OTYzNjAyODIsImV4cCI6MjU2MDI3Mzg4Mn0.tRtyvJ0YEQfLAHHKs6a_J_BGj7jy8TSyqFlTdpTsgv8&t=2023-10-03T19%3A11%3A04.733Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/01Gladden%20Island/Camada%20160.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAxR2xhZGRlbiBJc2xhbmQvQ2FtYWRhIDE2MC5wbmciLCJpYXQiOjE2OTYzNjAyOTMsImV4cCI6MjU2MDI3Mzg5M30.pxaV3bk8YzYxlHf6YvX3Pgk1KHbq-FYhrK31WsFMrDU&t=2023-10-03T19%3A11%3A16.794Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/01Gladden%20Island/Camada%20161.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAxR2xhZGRlbiBJc2xhbmQvQ2FtYWRhIDE2MS5wbmciLCJpYXQiOjE2OTYzNjAzMDcsImV4cCI6MjU2MDI3MzkwN30.clIgfp24ke41IokU19pDl_aRCzZrxy-I0ze5VftZ4f0&t=2023-10-03T19%3A11%3A29.428Z",
                ],
                price: 23795,
                highlights: [
                    "HDTV de 55 com Amazon Prime, Disney+, HBO Max, Netflix...",
                    "Sistema de som Sonos com Bluetooth",
                    "Mesa de bilhar",
                    "Livros e material de leitura",
                    "Cercadinho/berço portátil",
                    "Jogos de tabuleiro",
                    "Recomendações de babás",
                    "Ar-condicionado split",
                    "Alarme de monóxido de carbono",
                    "Wi-Fi e Espaço de trabalho exclusivo",
                    "Vista para as águas, Ao lado de uma orla",
                    "Café da Manhã",
                    "Limpeza disponível durante a estadia",
                ],
                recommended: true,
                maxGuests: 4,
                checkIn: "após 15:00",
                checkOut: "antes das 12:00",
                type: "Especial",
            },
            // !Cabana do Sossego - 02
            {
                name: "Cabana do Sossego",
                description:
                    "Venha se hospedar na primeira Cabana A-Frame do Sul de Minas. A Cabana do Sossego foi inspirada nas Cabanas americanas e canadenses. Um encontro lindo da natureza com a Arquitetura.Feita toda em madeira rústica, e decorada com todo luxo e design para que o hospede tenha uma experiência inesquecível com requinte e aconchego. Alem de contato com a natureza, descanso e tranquilidade. Aproveite o sossego de nossa região para curtir momentos a dois, descansar e se divertir na Serra da Mantiqueira.",
                location: "Bairro Mellos, Brasil",
                locationDescription:
                    "O Bairro dos Mellos é um bairro rural e familiar. Nao possui mercados, mas fica bem proximo do centro da cidade de Piranguçu. Estamos a 1h40m de Campos do Jordao.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/02Cabana%20do%20Sossego/01.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAyQ2FiYW5hIGRvIFNvc3NlZ28vMDEucG5nIiwiaWF0IjoxNjk2MzYwMzkxLCJleHAiOjI1NjAyNzM5OTF9.c764TkXKcGsrxbB8cXjQFmCkrBxK0qdWYACrk7Xvno8&t=2023-10-03T19%3A12%3A53.641Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/02Cabana%20do%20Sossego/02.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAyQ2FiYW5hIGRvIFNvc3NlZ28vMDIucG5nIiwiaWF0IjoxNjk2MzYwNDAwLCJleHAiOjI1NjAyNzQwMDB9.exx1zHytuLR9mpGOaq7PUsYg3Lq0mae3OpMz6Qekfdk&t=2023-10-03T19%3A13%3A02.512Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/02Cabana%20do%20Sossego/03.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAyQ2FiYW5hIGRvIFNvc3NlZ28vMDMucG5nIiwiaWF0IjoxNjk2MzYwNDA5LCJleHAiOjI1NjAyNzQwMDl9.Hq0Z32srtUZFWnNCyx_wEmBEXklgoG3dxMnqqDUswd0&t=2023-10-03T19%3A13%3A11.671Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/02Cabana%20do%20Sossego/04.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAyQ2FiYW5hIGRvIFNvc3NlZ28vMDQucG5nIiwiaWF0IjoxNjk2MzYwNDE5LCJleHAiOjI1NjAyNzQwMTl9.xH3xDhN3eaKMsWPVRPKFAGN-H5fvMxuitGTUAjbR5ds&t=2023-10-03T19%3A13%3A22.109Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/02Cabana%20do%20Sossego/05.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAyQ2FiYW5hIGRvIFNvc3NlZ28vMDUucG5nIiwiaWF0IjoxNjk2MzYwNDI5LCJleHAiOjI1NjAyNzQwMjl9.KIPDXDGN7Gec0EmNWL--L4Iwku-CDcoMDucNnRsDO1c&t=2023-10-03T19%3A13%3A32.932Z",
                ],
                price: 1050,
                highlights: [
                    "Vista para as montanhas",
                    "Câmeras de segurança",
                    "Cozinha",
                    "Wi-Fi",
                    "Estacionamento incluído",
                    "Banheira",
                    "TV",
                    "Ar-condicionado",
                    "Fogueira",
                    "Churrasqueira",
                    "Permitido animais",
                    "Café da manhã",
                ],
                recommended: false,
                maxGuests: 2,
                checkIn: "após 15:00",
                checkOut: "antes das 11:00",
                type: "Chalé",
            },
            // !Dragon Temple - 03
            {
                name: "Dragon Temple",
                description:
                    "O Templo Zen tem mais de 1.000 anos, com armaduras samurais e gaiolas que remontam a 600 anos.A casa de hóspedes foi projetada com arquitetura japonesa, para que você possa ficar confortavelmente. Você terá seu próprio banheiro privativo e banheiro.Tente participar do seu zazen matinal. Preparamos comida japonesa grátis para o café da manhã. O jantar também pode ser preparado por 2.500 ienes. Eu começo este hotel templo para dizer às pessoas a verdadeira atratividade da cultura japonesa e sentimentos de gratidão através da experiência que você só pode ter no templo. O chef feito pelo chef exclusivo é de 2500 ienes .É necessário fazer reservas. O cozimento automático também é possível. Dentro do templo e templos. Este lugar é casa de estilo japonês e geralmente usado de alta classe restaurante de estilo japonês servindo japonês , executado pelo nosso templo. O templo Ryutakuzenji é apenas ao lado da casa.",
                location: "Takasaki-shi, Japão",
                locationDescription:
                    "Não há lojas ao redor, e esperamos que você aprecie o luar, a beleza das estrelas, o som de insetos e o gosto profundo do Templo Zen.",
                countryCode: "JP",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/03Dragon%20Temple/Camada%20177.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAzRHJhZ29uIFRlbXBsZS9DYW1hZGEgMTc3LnBuZyIsImlhdCI6MTY5NjM2MDQ2MiwiZXhwIjoyNTYwMjc0MDYyfQ.VtAv8ODo2TqV3oEJje2Nn3MZws447s-dfIx4WA1ZaYg&t=2023-10-03T19%3A14%3A04.741Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/03Dragon%20Temple/Camada%20178.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAzRHJhZ29uIFRlbXBsZS9DYW1hZGEgMTc4LnBuZyIsImlhdCI6MTY5NjM2MDQ3NSwiZXhwIjoyNTYwMjc0MDc1fQ.KOW2h2im2_h_X7emEsL3bsTns7oUC6sxeo2gI-hwiKk&t=2023-10-03T19%3A14%3A17.866Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/03Dragon%20Temple/Camada%20179.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAzRHJhZ29uIFRlbXBsZS9DYW1hZGEgMTc5LnBuZyIsImlhdCI6MTY5NjM2MDQ4MywiZXhwIjoyNTYwMjc0MDgzfQ.A_y0_VGWu_6OEAO0xINRwEGAz1nGzLpUGnRo4hwUe_Q&t=2023-10-03T19%3A14%3A26.099Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/03Dragon%20Temple/Camada%20180.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAzRHJhZ29uIFRlbXBsZS9DYW1hZGEgMTgwLnBuZyIsImlhdCI6MTY5NjM2MDQ5OCwiZXhwIjoyNTYwMjc0MDk4fQ.MXUADv4d1m1l7r7LHhWesWK3T-rl-lGf_r_8_6dnIDM&t=2023-10-03T19%3A14%3A41.282Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/03Dragon%20Temple/Camada%20181.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzAzRHJhZ29uIFRlbXBsZS9DYW1hZGEgMTgxLnBuZyIsImlhdCI6MTY5NjM2MDUxNiwiZXhwIjoyNTYwMjc0MTE2fQ.wa0XPTIPqAEOOn6aFHTh-7qPTPDqnXJwHTbypp9dGJE&t=2023-10-03T19%3A14%3A58.875Z",
                ],
                price: 888,
                highlights: [
                    "Cozinha",
                    "Wi-Fi",
                    "Espaço de trabalho exclusivo",
                    "Estacionamento incluído",
                    "Jacuzzi privativa",
                    "Máquina de Lavar",
                    "Ar-condicionado",
                    "Pátio ou varanda (Privativa)",
                    "Quintal",
                    "Lareira interna",
                ],
                recommended: true,
                maxGuests: 5,
                checkIn: "15:00 - 21:00",
                checkOut: "antes das 10:00",
                type: "Hotel",
            },
            // !Domo Geodésico - 04
            {
                name: "Domo Geodésico",
                description:
                    "Um domo geodésico que é uma estrutura arredondada, toda feita em madeira ecologicamente tratada. As vibrações dentro dessas estruturas são únicas. Seus 45 metros quadrados contam com uma suíte com mezanino, uma cozinha toda equipada com fogão, forno, frigobar, airfryer e todos os utensílios para “chefs” aspirantes. O chalé possui ar condicionado, um banheiro espaçoso e ducha elétrica. O ponto alto sem dúvida é o painel de vidro contemplando as cadeias de montanha da Serra da Mantiqueira. O Domo foi projetado ao redor da cama queen, priorizando a experiência de sono e descanso dos hóspedes. Por isso, temos o icônico colchão e travesseiros da Zissou que trazem excelência nas sensações de conforto, suporte e toque. Da porta para fora já se pode sentir a presença da natureza. O domo conta com sua própria horta de temperos e chás para os hóspedes se servirem a vontade.",
                location: "Monteiro Lobato, Brasil",
                locationDescription:
                    "A pérola de Monteiro Lobato é o Bairro dos Souzas. Aqui há uma venda de produtos orgânicos, veganos e sustentáveis. Também tem um mercado com tudo que você possa imaginar, a apenas 3km da cabana. Um pequeno bistrô que abre alguns dias por semana. E um produtor de pães de fermentação natural que é um dos melhores que já provamos. Em Monteiro Lobato temos restaurantes de alguns estilos diferentes, um restaurante a la carte, uma lanchonete e um restaurante de comida caipira. Existem trilhas que podem ser feitas, tanto no terreno do sítio quanto em locais próximos também com visuais de tirar o fôlego.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/04Domo%20Geodesico/01.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA0RG9tbyBHZW9kZXNpY28vMDEucG5nIiwiaWF0IjoxNjk2MzYwNTUxLCJleHAiOjI1NjAyNzQxNTF9.SfmmviLX6oKABzKsL21jiTN0Rd1sVV0ezvNGvhYVgg4&t=2023-10-03T19%3A15%3A33.585Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/04Domo%20Geodesico/02.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA0RG9tbyBHZW9kZXNpY28vMDIucG5nIiwiaWF0IjoxNjk2MzYwNTYyLCJleHAiOjI1NjAyNzQxNjJ9.5AuGPabcjssjk1deGGkdyNcZ6lzb3A0-Lyv81DmGhT4&t=2023-10-03T19%3A15%3A45.136Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/04Domo%20Geodesico/03.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA0RG9tbyBHZW9kZXNpY28vMDMucG5nIiwiaWF0IjoxNjk2MzYwNTc0LCJleHAiOjI1NjAyNzQxNzR9.QwIsLDVzTImRIsCwGtnM4Nl1VWdc2b4F1gkBd9-Y038&t=2023-10-03T19%3A15%3A57.285Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/04Domo%20Geodesico/04.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA0RG9tbyBHZW9kZXNpY28vMDQucG5nIiwiaWF0IjoxNjk2MzYwNTg0LCJleHAiOjI1NjAyNzQxODR9.9KADRdnCW9sbgUcp0viL4HFYekWBDmFJ6r9l6-r74Xg&t=2023-10-03T19%3A16%3A07.069Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/04Domo%20Geodesico/05.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA0RG9tbyBHZW9kZXNpY28vMDUucG5nIiwiaWF0IjoxNjk2MzYwNTk0LCJleHAiOjI1NjAyNzQxOTR9.ykVf8QxyU_hs1SBps_2FGruZxtQqPAMskHlrIWJXPJk&t=2023-10-03T19%3A16%3A17.075Z",
                ],
                price: 810,
                highlights: [
                    "Vista para as montanhas",
                    "Água quente",
                    "Wi-Fi rápido(50 Mbps)",
                    "Jogos de tabuleiro",
                    "Cozinha",
                    "Acesso ao lago",
                    "Ar-condicionado split",
                    "Acesso ao lago",
                    "Fogueira",
                    "Churrasqueira",
                    "Jacuzzi privativa",
                    "Estacionamento incluído",
                ],
                recommended: false,
                maxGuests: 2,
                checkIn: "após 12:00",
                checkOut: "antes das 09:00",
                type: "Chalé",
            },
            // !Alianz Loft - 05
            {
                name: "Alianz Loft",
                description:
                    "A 20 minutos do aeroporto de San José. Primeiro loft construído por Alianz. Contém um terraço decorado, jacuzzi, lareira, jardim de coelhos, dois quartos, duas varandas, portão de entrada, jardim privado, estacionamento privado, área para churrasco, ar condicionado em cada quarto, quadra de basquete, camas de luxo e vista para a montanha. Ideal para amantes da arquitetura, encontros românticos ou para se divertir. É um espaço único do tipo dele. Apenas animais de estimação que não prejudiquem coelhos são permitidos.",

                location: "San Roque de Barva, Costa Rica",
                locationDescription:
                    "Cidade pequena, muito perto das principais estradas principais ou das áreas de vulcão ou cachoeiras. Por favor, verifique o guia. Estadia recomendada um dia no apartamento relaxante. O restaurante mais recomendado fica a Casa Grande a 5 minutos de distância, ou comida mais típica Carretica a 8 minutos de distância. Supermercado Automercado se realmente completa mercearia agradável. Mais lugares visitados para viajar são as cachoeiras La Paz.",
                countryCode: "CR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/05Alianz%20Loft/Alianz-01.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA1QWxpYW56IExvZnQvQWxpYW56LTAxLnBuZyIsImlhdCI6MTY5NjM2MDY1MCwiZXhwIjoyNTYwMjc0MjUwfQ.68zWtszVRQYPFjh80IgbE45FeoTiKnKHpZ2btckluNQ&t=2023-10-03T19%3A17%3A12.803Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/05Alianz%20Loft/Alianz-02.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA1QWxpYW56IExvZnQvQWxpYW56LTAyLnBuZyIsImlhdCI6MTY5NjM2MDY1OCwiZXhwIjoyNTYwMjc0MjU4fQ.PNYUqivniO7aIhWdQD4k_QjmlhLc0NmXJCA91KeeGLY&t=2023-10-03T19%3A17%3A20.802Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/05Alianz%20Loft/Alianz-03.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA1QWxpYW56IExvZnQvQWxpYW56LTAzLnBuZyIsImlhdCI6MTY5NjM2MDY2NiwiZXhwIjoyNTYwMjc0MjY2fQ.o6-k_HmNjN4PdM2W4gviPcRetGJ3mAaTCzJn8gxBS3E&t=2023-10-03T19%3A17%3A28.809Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/05Alianz%20Loft/Alianz-04.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA1QWxpYW56IExvZnQvQWxpYW56LTA0LnBuZyIsImlhdCI6MTY5NjM2MDY3NCwiZXhwIjoyNTYwMjc0Mjc0fQ.AiAgOp6pnTdCRk9ca4i6-gGkuoSfji79o7u3NKcp4c0&t=2023-10-03T19%3A17%3A36.727Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/05Alianz%20Loft/Alianz-05.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA1QWxpYW56IExvZnQvQWxpYW56LTA1LnBuZyIsImlhdCI6MTY5NjM2MDY4MSwiZXhwIjoyNTYwMjc0MjgxfQ.97XEe_frwoaysGqgbTyudcrq8GJfQSD443Pu-53rHwA&t=2023-10-03T19%3A17%3A44.312Z",
                ],
                price: 1600,
                highlights: [
                    "Vista para o horizonte da cidade",
                    "Vista para as montanhas",
                    "HDTV de 52 com Apple TV e TV a cabo",
                    "Sistema de som Bose com Bluetooth",
                    "Equipamento para exercícios: tapete de ioga",
                    "Climatização: Ar-condicionado split",
                    "Câmeras de segurança na propriedade",
                    "Wi-Fi",
                    "Cozinha totalmente equipada",
                    "Churrasqueira",
                    "Jacuzzi privativa",
                    "Estacionamento incluído",
                    "Permitido animais",
                    "É permitido deixar as malas",
                    "Permitido fumar",
                    "Estadias de longa duração são permitidas",
                ],
                recommended: true,
                maxGuests: 4,
                checkIn: "após 14:00",
                checkOut: "antes das 11:00",
                type: "Especial",
            },
            // !Bosque Encantado - 06
            {
                name: "Bosque Encantado",
                description:
                    "Viva uma imersão na Mata Atlântica, com muito conforto e aventura. Alimentação inclusa no valor da diária, Experiências na Horta Orgânica, Hiking, BirdWatching, Biking, Charcutaria, Sauna, Piscina Natural, Fogueira sob o céu estrelado e muito mais. A vista para o Bosque, o som dos pássaros, a luz ao amanhecer, as portas para o terraço privativo a beira do lago, a lareira e todos os detalhes pensados com muito carinho. Situada na sede da Reserva Mata Grande, a Suíte Bosque é um encanto.",

                location: "Biritiba Mirim, Brasil",
                locationDescription:
                    "Em meio à encantadora cidade de Biritiba Mirim, no coração do estado de São Paulo, Brasil, encontra-se a Suite Bosque encantado, uma acomodação única que oferece uma experiência verdadeiramente mágica de contato com a natureza. Este retiro encantador está estrategicamente situado em um bosque exuberante, onde a tranquilidade e a serenidade reinam supremas.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/06Bosque%20Encantado/01.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA2Qm9zcXVlIEVuY2FudGFkby8wMS5wbmciLCJpYXQiOjE2OTYzNjA3MTMsImV4cCI6MjU2MDI3NDMxM30.uvq4niTkmVFYkmc4QuKQfMFBaXUHYmvvedpf0o2sNys&t=2023-10-03T19%3A18%3A15.636Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/06Bosque%20Encantado/02.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA2Qm9zcXVlIEVuY2FudGFkby8wMi5wbmciLCJpYXQiOjE2OTYzNjA3MjQsImV4cCI6MjU2MDI3NDMyNH0.7wiU1FibANjhp1UCGRNvW60UZ8nG6VNPFmyR2gMOxy0&t=2023-10-03T19%3A18%3A28.321Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/06Bosque%20Encantado/03.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA2Qm9zcXVlIEVuY2FudGFkby8wMy5wbmciLCJpYXQiOjE2OTYzNjA3MzUsImV4cCI6MjU2MDI3NDMzNX0.5ZNNka_C_ShTNU_0-cuODmuP3vDlnwHnIBzIHAR8TMQ&t=2023-10-03T19%3A18%3A38.927Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/06Bosque%20Encantado/04.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA2Qm9zcXVlIEVuY2FudGFkby8wNC5wbmciLCJpYXQiOjE2OTYzNjA3NDUsImV4cCI6MjU2MDI3NDM0NX0.CYhv1nyyb3JUnkDtRRfsWMjEw4t_4XBlwr5f1E8un_M&t=2023-10-03T19%3A18%3A48.253Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/06Bosque%20Encantado/05.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA2Qm9zcXVlIEVuY2FudGFkby8wNS5wbmciLCJpYXQiOjE2OTYzNjA3NTUsImV4cCI6MjU2MDI3NDM1NX0.A5LzAIkSvLXFY_RhYbrLLSX6Ia2fgenpMGwgnEmCfwk&t=2023-10-03T19%3A18%3A57.853Z",
                ],
                price: 1120,
                highlights: [
                    "Tranca na porta do quarto",
                    "Vista para as águas",
                    "Espaço de trabalho exclusivo",
                    "Estacionamento incluído",
                    "Piscina",
                    "Sauna",
                    "Quintal",
                    "Lareira interna",
                    "Mesa de bilhar",
                    "Lareira interna",
                    "Kit de primeiros socorros",
                    "Café da manhã",
                ],
                recommended: false,
                maxGuests: 2,
                checkIn: "após 15:00",
                checkOut: "antes das 11:00",
                type: "Pousada",
            },
            // !Villa Joglo - 07
            {
                name: "Villa Joglo",
                description:
                    "A Villa Joglo é uma propriedade deslumbrante situada entre a floresta tropical na Praia de Setangi, a 10 minutos ao norte do centro de Senggigi. O design de interiores possui arquitetura e design javaneses tradicionais, com um toque moderno e confortável. A propriedade tem 3 edifícios separados e independentes que se interligam através de uma passarela central, permitindo que até 12 hóspedes fiquem juntos em um complexo, mas com privacidade quando necessário. Uma piscina central está localizada na villa principal para que todos possam desfrutar. Esta bela vila nova é composta por 3 edifícios separados que se interligam através de uma passarela central, permitindo que os hóspedes fiquem juntos em um complexo, mas com privacidade quando necessário. A villa acomoda até 12 pessoas. Se reservar para 1-4 pessoas, terá acesso ao maior edifício - Villa Java. Se forem necessários quartos adicionais, você também terá acesso à Villa Robert e/ou à Villa Caroline. A villa está localizada na Praia de Setangi, a 10 minutos de carro do norte do centro de Senggigi.",

                location: "Pemenang, Indonésia",
                locationDescription:
                    "Senggigi está se tornando um destino muito popular para pessoas que querem escapar das áreas turísticas movimentadas de Bali. Tem todos os confortos de Bali - restaurantes ocidentais, massagens e salões de beleza, cafés, lojas de souvenirs, praias e bares. Setangi Beach é uma praia bonita, geralmente muito tranquila 10 minutos ao norte do centro de Senggigi. A partir da nossa vila, você pode caminhar por aproximadamente 5-10 minutos pela vila tranquila diretamente até a praia. Os coqueiros altos enchem a área gramada em frente à praia, criando silhuetas lindas enquanto você se aproxima da praia para observar o pôr do sol sobre a água. Lendung Luar é o nome da aldeia onde nossa vila está localizada. É tranquilo, local e pequeno, com apenas algumas pequenas lojas que vendem produtos básicos. As pessoas que vivem aqui cultivam principalmente suas pequenas terras. Há um centro de ioga ao lado da nossa vila com aulas diárias de ioga e outro hotel com bar e restaurante a uma curta caminhada de distância em direção à praia.",
                countryCode: "ID",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/07Villa%20Joglo/Camada%20192.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA3VmlsbGEgSm9nbG8vQ2FtYWRhIDE5Mi5wbmciLCJpYXQiOjE2OTYzNjA3NzUsImV4cCI6MjU2MDI3NDM3NX0.11slv-XM8VEo-u-y93rrTgjxFMppRR2g9nAlO0--kog&t=2023-10-03T19%3A19%3A18.136Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/07Villa%20Joglo/Camada%20193.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA3VmlsbGEgSm9nbG8vQ2FtYWRhIDE5My5wbmciLCJpYXQiOjE2OTYzNjA3ODksImV4cCI6MjU2MDI3NDM4OX0.uKIKDQrSierA6cbO67rBHh9yKS6i-SFkowx-9dpon1E&t=2023-10-03T19%3A19%3A32.886Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/07Villa%20Joglo/Camada%20194.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA3VmlsbGEgSm9nbG8vQ2FtYWRhIDE5NC5wbmciLCJpYXQiOjE2OTYzNjA4MDUsImV4cCI6MjU2MDI3NDQwNX0.IbkDoB5rsvuvs8lj9J1AypvSWYk2iwfXHi6AaaDfWxM&t=2023-10-03T19%3A19%3A48.498Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/07Villa%20Joglo/Camada%20195.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA3VmlsbGEgSm9nbG8vQ2FtYWRhIDE5NS5wbmciLCJpYXQiOjE2OTYzNjA4MjMsImV4cCI6MjU2MDI3NDQyM30.Egk_X0LmKsKJk376mr3z3P3oi8T5lfnDfqH_q6T1gRA&t=2023-10-03T19%3A20%3A06.449Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/07Villa%20Joglo/Camada%20196.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA3VmlsbGEgSm9nbG8vQ2FtYWRhIDE5Ni5wbmciLCJpYXQiOjE2OTYzNjA4MzcsImV4cCI6MjU2MDI3NDQzN30.JTgRSDrWScVpGUhy1T3pDbsz7sQoZQ7RnbM94fduyuM&t=2023-10-03T19%3A20%3A19.954Z",
                ],
                price: 378,
                highlights: [
                    "Cozinha",
                    "Wi-Fi",
                    "Estacionamento incluído",
                    "Piscina",
                    "TV",
                    "Ar-condicionado",
                    "Quintal",
                    "Secador de cabelo",
                ],

                recommended: false,
                maxGuests: 12,
                checkIn: "após 14:00",
                checkOut: "antes das 12:00",
                type: "Especial",
            },
            // !Portugas - 08
            {
                name: "Portugas",
                description:
                    "Os chalés são mobiliados com estrutura para até 4 pessoas pernoitarem confortavelmente em camas . No chalé tem fogão cook top de 2 bocas, geladeira, utensílios necessários para uma refeição rápida e quintal e lavanderia. Um lugar tranquilo, familiar e seguro, onde os hospedes podem usufruir de diárias, locações mensais e anuais. Estamos na praia com clima de montanha localizados dentro do condomínio Morada da Praia .",

                location: "Bertioga, Brasil",
                locationDescription:
                    "Estamos dentro do condomínio Morada da Praia ,nele tem ônibus que circulam gratuitamente de hora em hora pela avenida principal. Tem Food Park ,são foodtruks com comidinhas e musica ao vivo, barzinhos, centrinho comercial com padaria ,mercadinho, sorveteria, pizzaria, restaurante e igreja. Nossa praia é a de Boraceia e estamos próximos a praia de Guaratuba ,Barra do Una ,Juqueí entre outras. Aqui também temos passeios náuticos , pesca esportiva, trilhas ,cachoeiras e nossa gastronomia rica em peixes e frutos do mar.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/08Residencial%20Dos%20Portugas/01.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA4UmVzaWRlbmNpYWwgRG9zIFBvcnR1Z2FzLzAxLnBuZyIsImlhdCI6MTY5NjM2MDg5MywiZXhwIjoyNTYwMjc0NDkzfQ.n7-i-laPPOGvMrVxPterrHVmhqaCoKGrjWRbSv3q9ik&t=2023-10-03T19%3A21%3A15.572Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/08Residencial%20Dos%20Portugas/02.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA4UmVzaWRlbmNpYWwgRG9zIFBvcnR1Z2FzLzAyLnBuZyIsImlhdCI6MTY5NjM2MDkxMiwiZXhwIjoyNTYwMjc0NTEyfQ.uB0zaJKRi3WfNYAf3zaf8lPEeIr4VKW3oWOHatZKq1M&t=2023-10-03T19%3A21%3A35.510Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/08Residencial%20Dos%20Portugas/03.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA4UmVzaWRlbmNpYWwgRG9zIFBvcnR1Z2FzLzAzLnBuZyIsImlhdCI6MTY5NjM2MDkyMiwiZXhwIjoyNTYwMjc0NTIyfQ.r27Qgw1_N0aGKBKTiIglrGD6tpYTzMZcEde99pG4VI0&t=2023-10-03T19%3A21%3A45.033Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/08Residencial%20Dos%20Portugas/04.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA4UmVzaWRlbmNpYWwgRG9zIFBvcnR1Z2FzLzA0LnBuZyIsImlhdCI6MTY5NjM2MDk0MywiZXhwIjoyNTYwMjc0NTQzfQ.WZWSGXWDZFzclqjbKk63BcSYWvfgYLKE2rJW1o3L4lc&t=2023-10-03T19%3A22%3A06.451Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/08Residencial%20Dos%20Portugas/05.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA4UmVzaWRlbmNpYWwgRG9zIFBvcnR1Z2FzLzA1LnBuZyIsImlhdCI6MTY5NjM2MDk1NSwiZXhwIjoyNTYwMjc0NTU1fQ.SUUDDPXe6JduT4X0X1KoGU7l8IXpAZD9l-coFA3YVMU&t=2023-10-03T19%3A22%3A17.720Z",
                ],
                price: 420,
                highlights: [
                    "Vista para as montanhas",
                    "Banheiro",
                    "Wi-Fi",
                    "Cozinha",
                    "Estacionamento incluído",
                    "Piscina",
                    "Ar-condicionado",
                    "Câmeras de segurança na propriedade",
                    "Espaço de trabalho exclusivo",
                    "Mesa de jantar",
                    "Pátio ou varanda",
                    "Permitido animais",
                ],
                recommended: false,
                maxGuests: 4,
                checkIn: "15:00 - 18:00",
                checkOut: "antes das 10:00",
                type: "Pousada",
            },
            // !Yui Valley - 09
            {
                name: "Yui Valley",
                description:
                    "Bem-vindo ao Yui Valley ! Uma parada refrescante entre Tóquio e Quioto. No campo, simples casa tradicional de agricultores cercada por Montanhas Verdes Exuberantes, florestas de bambu, rios e campos de chá. Fora do caminho turístico habitual, descubra o lado rural do Japão. Venha relaxar e curtir diferentes atividades: Caminhada com vista para o Monte Fuji, uma caminhada para atravessar bambu e campos de chá, cerimônia do chá verde, fonte termal, bicicletas, oficina de bambu, Shiatsu, tratamento de acupuntura ou mergulho no rio. Estamos localizados em Shizuoka, entre Tóquio e Kyoto na linha Shinkansen (trem exp.), Então o acesso aqui é fácil e confortável.",

                location: "Fujieda, Japão",
                locationDescription:
                    "Nossa pequena aldeia de agricultores tradicionais é famosa pela colheita de chá verde e brotos de bambu. A casa e a área podem ser boas para quem procura ver a cultura tradicional e local do Japão, um retiro remoto nas colinas e desfrutar de atividades ao ar livre. Você pode se locomover usando o ônibus local, alugando nossas bicicletas ou usando nosso táxi (se eu puder).",
                countryCode: "JP",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/09Yui%20Valley/Camada%20182.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA5WXVpIFZhbGxleS9DYW1hZGEgMTgyLnBuZyIsImlhdCI6MTY5NjM2MTAwMCwiZXhwIjoyNTYwMjc0NjAwfQ.HjELfPtd0ucBP5tx34rGVtZD6F2ReDTAtal4-CUhclI&t=2023-10-03T19%3A23%3A03.946Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/09Yui%20Valley/Camada%20183.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA5WXVpIFZhbGxleS9DYW1hZGEgMTgzLnBuZyIsImlhdCI6MTY5NjM2MTAxNCwiZXhwIjoyNTYwMjc0NjE0fQ.jQzhAeLBcB7RMGyRL9kLgFdPHRcdv62j6mdDQ7luC64&t=2023-10-03T19%3A23%3A17.505Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/09Yui%20Valley/Camada%20184.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA5WXVpIFZhbGxleS9DYW1hZGEgMTg0LnBuZyIsImlhdCI6MTY5NjM2MTAyNCwiZXhwIjoyNTYwMjc0NjI0fQ.ut8uRSZ2bGLPF3Bwiy5Eh4KobN48zPOgDRupzT65sPc&t=2023-10-03T19%3A23%3A27.340Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/09Yui%20Valley/Camada%20185.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA5WXVpIFZhbGxleS9DYW1hZGEgMTg1LnBuZyIsImlhdCI6MTY5NjM2MTAzNiwiZXhwIjoyNTYwMjc0NjM2fQ.XMzJwUhZpr7EtSEQEG9OwmtdkMyb1KQrDNFtsuAS4_4&t=2023-10-03T19%3A23%3A39.098Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/09Yui%20Valley/Camada%20186.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzA5WXVpIFZhbGxleS9DYW1hZGEgMTg2LnBuZyIsImlhdCI6MTY5NjM2MTA0NiwiZXhwIjoyNTYwMjc0NjQ2fQ.hZ3upD-ccGTfVjsAWEZzyD_0ziuF4tR1IERs1GTfob4&t=2023-10-03T19%3A23%3A48.389Z",
                ],
                price: 592,
                highlights: [
                    "Cozinha",
                    "Wi-Fi",
                    "Espaço de trabalho exclusivo",
                    "Estacionamento incluído",
                    "Jacuzzi privativa",
                    "Máquina de Lavar",
                    "Ar-condicionado",
                    "Pátio ou varanda (Privativa)",
                    "Quintal",
                    "Lareira interna",
                ],
                recommended: true,
                maxGuests: 6,
                checkIn: "15:00 - 21:00",
                checkOut: "antes das 10:00",
                type: "Chalé",
            },
            // !Aurora - 10
            {
                name: "Aurora",
                description:
                    "Local cercado pela mata atlântica, frequentemente visitado por esquilos e pássaros como: Saíra-sete-cores, Tié-sangue, carruíras, maritacas etc. Hospede-se com muita tranquilidade e conforto. Nossas suites encontram-se distantes uma das outras, o cafe da manhã é servido de forma individual ( não temos bufett) em mesas com distância de pelo menos 2 mts umas das outras, sempre efetuamos a limpeza e higienização com todo cuidado e carinho, mas, devido a Covid-19 intensificamos estes cuidados com produtos próprios para desinfecção e higienização, como: álcool 70% e água sanitária em superfícies impermeáveis e com Lysoform em tecidos como colchões e travesseiros a cada check-out, alem da troca das capas impermeáveis dos travesseiros e colchões.",

                location: "Ilhabela, Brasil",
                locationDescription:
                    "Um refúgio paradisíaco localizado na deslumbrante ilha de Ilhabela, no estado de São Paulo, Brasil. Esta pousada encantadora oferece uma experiência única de hospedagem, onde o luxo e o charme se encontram com a beleza natural de uma ilha tropical.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/10Pousada%20Aurora/01.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEwUG91c2FkYSBBdXJvcmEvMDEucG5nIiwiaWF0IjoxNjk2MzYxMDY5LCJleHAiOjI1NjAyNzQ2Njl9.vl422CDtkgxdrM3cUa7ONij7P6YXgY4w9FT46WtMivk&t=2023-10-03T19%3A24%3A12.568Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/10Pousada%20Aurora/02.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEwUG91c2FkYSBBdXJvcmEvMDIucG5nIiwiaWF0IjoxNjk2MzYxMDgwLCJleHAiOjI1NjAyNzQ2ODB9.iUl89HQ7NRqNxf9hMVLEBPyrR6NQk8Pi-wIzvHUclGw&t=2023-10-03T19%3A24%3A24.485Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/10Pousada%20Aurora/03.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEwUG91c2FkYSBBdXJvcmEvMDMucG5nIiwiaWF0IjoxNjk2MzYxMDkzLCJleHAiOjI1NjAyNzQ2OTN9.bm6qx-lTSbCYPLXlHVCk8S5WIx39Z9RZlOiiyBd-edk&t=2023-10-03T19%3A24%3A36.580Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/10Pousada%20Aurora/04.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEwUG91c2FkYSBBdXJvcmEvMDQucG5nIiwiaWF0IjoxNjk2MzYxMTEwLCJleHAiOjI1NjAyNzQ3MTB9.2NXAmlkJ-u04pqEU-8v91-H_Pp-utuDWaqJ0-_1OHsE&t=2023-10-03T19%3A24%3A53.830Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/10Pousada%20Aurora/05.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEwUG91c2FkYSBBdXJvcmEvMDUucG5nIiwiaWF0IjoxNjk2MzYxMTIwLCJleHAiOjI1NjAyNzQ3MjB9.pCvYXMwsG7INONqYUJWEf4AaV0mUbmW66ojsk5UN7dI&t=2023-10-03T19%3A25%3A03.449Z",
                ],
                price: 250,
                highlights: [
                    "Vista para o jardim",
                    "Banheiro",
                    "Toalhas e lençóis limpos",
                    "Roupa de cama",
                    "Wi-Fi",
                    "Ar-condicionado de janela/parede",
                    "Tranca na porta do quarto",
                    "Kit de primeiros socorros",
                    "Pátio ou varanda",
                    "Churrasqueira",
                    "Estacionamento gratuito em garagem na propriedade",
                    "Café da Manhã é fornecido",
                ],
                recommended: false,
                maxGuests: 3,
                checkIn: "após 14:00",
                checkOut: "antes das 09:00",
                type: "Pousada",
            },
            // !Acantilado - 11
            {
                name: "Acantilado",
                description:
                    "Mergulhe na Cliff House, um ícone arquitetônico na Costa de Granada. Integrado à montanha, desfruta de um clima estável de 20°C durante todo o ano. Seu design de ponta, do telhado ondulado aos móveis luxuosos, vai cativar você. Desfrute da ampla sala de estar de 150 m ² com uma cozinha aberta, toda emoldurada por vistas panorâmicas do Mediterrâneo. A apenas 5 km de distância, a praia convida a aventuras náuticas, enquanto a vizinha Sierra Nevada oferece esqui de inverno. A Cliff House não é apenas uma habitação, mas uma verdadeira obra-prima arquitetônica onde cada detalhe, desde o design à funcionalidade, foi meticulosamente orquestrado para proporcionar uma experiência incomparável. O telhado, um espetáculo de engenharia, emprega um sistema de formações de malha de metal com deformação artesanal, coberta com escamas de zinco feitas à mão, todas apoiadas por vigas. No interior, os móveis não são apenas peças, mas designs digitais únicos criados pelos arquitetos, com o objetivo de fundir conforto e estética exclusivamente para hóspedes. Toda a casa está condicionada ao conforto total do clima, equipada com ar condicionado e sistemas de bomba de calor que garantem o conforto ideal em qualquer estação.",

                location: "Salobreña, Espanha",
                locationDescription:
                    "Localizado em uma das áreas mais serenas e tranquilas de Salobreña, o bairro onde La Casa Acantilado está situado é um verdadeiro oásis de tranquilidade. Aqui, o agitação da vida cotidiana parece se dissipar, permitindo que você mergulhe na calma profunda. A localização é excepcionalmente tranquila, principalmente porque é menos densamente povoada, o que significa menos vizinhos imediatos e tráfego mínimo de veículos.",
                countryCode: "ES",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/11Casa%20Acantilado/Camada%2086.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzExQ2FzYSBBY2FudGlsYWRvL0NhbWFkYSA4Ni5wbmciLCJpYXQiOjE2OTYzNjExNTksImV4cCI6MjU2MDI3NDc1OX0.QhSwc2lAEXIOWvXn5aMqERRlFoSoL_9S4hEc9MjKBLc&t=2023-10-03T19%3A25%3A41.563Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/11Casa%20Acantilado/Camada%2087.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzExQ2FzYSBBY2FudGlsYWRvL0NhbWFkYSA4Ny5wbmciLCJpYXQiOjE2OTYzNjExNzUsImV4cCI6MjU2MDI3NDc3NX0.HCvf-jLZYHOs4LMd-Lp1XyJeJC1cew-Q9zfnDOBtgF8&t=2023-10-03T19%3A25%3A58.770Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/11Casa%20Acantilado/Camada%2088.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzExQ2FzYSBBY2FudGlsYWRvL0NhbWFkYSA4OC5wbmciLCJpYXQiOjE2OTYzNjEyMDgsImV4cCI6MjU2MDI3NDgwOH0.4vNZ3Y0GH7869aUFkVL5_57mYZ5uwEV_nRIOEGLB9o4&t=2023-10-03T19%3A26%3A30.711Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/11Casa%20Acantilado/Camada%2089.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzExQ2FzYSBBY2FudGlsYWRvL0NhbWFkYSA4OS5wbmciLCJpYXQiOjE2OTYzNjEyMTksImV4cCI6MjU2MDI3NDgxOX0.CmA0ANjS_P5URiTPsdRxpPc6Pckx6N43s--NwhXNTxQ&t=2023-10-03T19%3A26%3A42.197Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/11Casa%20Acantilado/Camada%2090.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzExQ2FzYSBBY2FudGlsYWRvL0NhbWFkYSA5MC5wbmciLCJpYXQiOjE2OTYzNjEyMzMsImV4cCI6MjU2MDI3NDgzM30.XV5g_4LSXEgMW6T2Fm8PQ_vTJKu19G6zowpYFPdw09o&t=2023-10-03T19%3A26%3A56.780Z",
                ],
                price: 2355,
                highlights: [
                    "Vista espetacular",
                    "Vista para a praia",
                    "Banheira",
                    "Secador de cabelo",
                    "Chuveiro externo",
                    "Água quente",
                    "HDTV de 65 com Netflix, TV a cabo",
                    "Berço",
                    "Ar-condicionado central",
                    "Câmeras de segurança na propriedade",
                    "Wi-Fi",
                    "Cozinha totalmente equipada",
                    "Pátio ou varanda (Privativa)",
                    "Piscina privativa externa (aquecida, borda infinita)",
                    "Estadias de longa duração são permitidas",
                    "Self check-in",
                ],
                recommended: true,
                maxGuests: 6,
                checkIn: "após 17:00",
                checkOut: "antes das 11:00",
                type: "Especial",
            },
            // !Conde do Mar - 12
            {
                name: "Conde do Mar",
                description:
                    "Na acomodação oferecida, o quarto é uma suíte privativa que conta com uma TV led, um frigobar, ar condicionado, e um armário. A cama já vem com lençol, travesseiro e uma coberta. Oferecemos também uma toalha de banho e uma de rosto com um sabonete. O hóspede também tem direito a café da manhã. Aqui por ser uma pousada de família prezamos muito para criar um clima leve para todos, com muita conversa e trocas de experiências, iremos adorar saber sobre a história de cada um de vocês. A Pousada tem um estacionamento na própria fachada, monitorado por câmeras e guarda noturno. Na parte interna temos um amplo espaço ajardinado, com uma arquitetura típica da ilha (estamos a 25 anos no mercado), ambiente agradável e familiar, com muitos pássaros no ambiente. Possui mesa de snooker na sala de jogos, churrasqueira na área externa, e tentamos sempre trazer um clima aconchegante para todos no ambiente, para que o hóspede se sinta confortável como se nem tivesse saído de casa.",

                location: "Ilha Bela, Brasil",
                locationDescription:
                    "Fácil acesso a toda ilha através de transporte público, ponto de ônibus muito próximo, aluguéis de patinete via app, pode-se alugar bicicletas para passeio (grande parte da cidade é preenchida pela ciclovia) tornando-se bem viável em dias de muito transito, além de ser agradável e colaborar com o meio ambiente.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/12Pousada%20Conde%20do%20Mar/01.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEyUG91c2FkYSBDb25kZSBkbyBNYXIvMDEucG5nIiwiaWF0IjoxNjk2MzYxMjg0LCJleHAiOjI1NjAyNzQ4ODR9.3yxdz6Ojre-ouqo6UI7F0GOFWMANSZnxIO5aRIum53c&t=2023-10-03T19%3A27%3A46.911Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/12Pousada%20Conde%20do%20Mar/02.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEyUG91c2FkYSBDb25kZSBkbyBNYXIvMDIucG5nIiwiaWF0IjoxNjk2MzYxMjk1LCJleHAiOjI1NjAyNzQ4OTV9.NoXnzcvrVp-xHim0825Wl72Q9uy0kVhx4o6xQffkGcY&t=2023-10-03T19%3A27%3A58.069Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/12Pousada%20Conde%20do%20Mar/03.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEyUG91c2FkYSBDb25kZSBkbyBNYXIvMDMucG5nIiwiaWF0IjoxNjk2MzYxMzA2LCJleHAiOjI1NjAyNzQ5MDZ9.iE674Lb_q5TAPFGnPqxLTApZCF197sVdAfNP-DWpmG0&t=2023-10-03T19%3A28%3A08.534Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/12Pousada%20Conde%20do%20Mar/04.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEyUG91c2FkYSBDb25kZSBkbyBNYXIvMDQucG5nIiwiaWF0IjoxNjk2MzYxMzE0LCJleHAiOjI1NjAyNzQ5MTR9.rko-WZUjshkHGYbyj1UNfPmcyBUIBcZ41MVzx-DYRg8&t=2023-10-03T19%3A28%3A16.949Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/12Pousada%20Conde%20do%20Mar/05.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEyUG91c2FkYSBDb25kZSBkbyBNYXIvMDUucG5nIiwiaWF0IjoxNjk2MzYxMzIzLCJleHAiOjI1NjAyNzQ5MjN9.n8I2s_Y_Kjur2HeejvDOyW19poKS7I7wW-7C2h2vFGY&t=2023-10-03T19%3A28%3A25.712Z",
                ],
                price: 188,
                highlights: [
                    "Sabonete para o corpo",
                    "Água quente",
                    "Quarto e lavanderia",
                    "Máquina de Lavar e Secadora",
                    "Cabides",
                    "Roupa de cama",
                    "Roupas de cama de algodão",
                    "Cobertores e travesseiros extras",
                    "Ar-condicionado de janela/parede",
                    "Tranca na porta do quarto",
                    "Wi-Fi: 37 Mbps",
                    "Estacionamento incluído",
                ],
                recommended: false,
                maxGuests: 2,
                checkIn: "15:00 - 21:00",
                checkOut: "antes das 10:00",
                type: "Pousada",
            },
            // !Mirror House North - 13
            {
                name: "Mirror House North",
                description:
                    "As Casas do Espelho são um par de casas de férias, situadas nos arredores maravilhosos dos Dolomitas Tirolanos do Sul, em meio a uma bela paisagem de macieiras, nos arredores da cidade de Bolzano. As casas Mirror oferecem uma chance única de passar umas belas férias cercadas pela arquitetura contemporânea dos mais altos padrões e pela paisagem e beleza mais surpreendentes que a natureza tem a oferecer. A Casa do Espelho Norte (45 m ²) tem 1 quarto com 1 cama de casal, 1 banheiro com um chuveiro espaçoso e 1 sala de estar/ cozinha (todos em um espaço) com 1 sofá-cama. A localização é ideal para 2 pessoas, mas pode acomodar até 4 pessoas. Se você estiver em 4 adultos, sugerimos reservar ambas as Casas Espelhadas (Norte e Sul). Além disso, há um grande terraço + jardim privado e um jardim compartilhado no verão com uma piscina compartilhada e bar de piscina self-service. Há também um depósito embaixo da casa, por exemplo, para equipamentos esportivos.",

                location: "Bolzano, Itália",
                locationDescription:
                    "As Casas Espelhos estão localizadas no Tirol do Sul, no norte da Itália, uma região famosa por sua paisagem deslumbrante, delícias culinárias, especialmente seus vinhos requintados e inúmeras possibilidades de atividade ao ar livre.",
                countryCode: "IT",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/13Mirror%20House%20North/Camada%20202.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEzTWlycm9yIEhvdXNlIE5vcnRoL0NhbWFkYSAyMDIucG5nIiwiaWF0IjoxNjk2MzYxMzQzLCJleHAiOjI1NjAyNzQ5NDN9.7BsGplRHqTEmhMyn1_DEnCD5b5o5VhdxZAkXQ1QpIaM&t=2023-10-03T19%3A28%3A45.926Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/13Mirror%20House%20North/Camada%20203.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEzTWlycm9yIEhvdXNlIE5vcnRoL0NhbWFkYSAyMDMucG5nIiwiaWF0IjoxNjk2MzYxMzYyLCJleHAiOjI1NjAyNzQ5NjJ9.GiwqbF1hxCwcfn5gzFyN97Mxpuo5P19-Eynq1XhqBak&t=2023-10-03T19%3A29%3A04.731Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/13Mirror%20House%20North/Camada%20204.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEzTWlycm9yIEhvdXNlIE5vcnRoL0NhbWFkYSAyMDQucG5nIiwiaWF0IjoxNjk2MzYxMzcyLCJleHAiOjI1NjAyNzQ5NzJ9.Q26k-zijZTnaAskA9zMBzX7IREG6ZM0cvg3A-G78XXM&t=2023-10-03T19%3A29%3A14.350Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/13Mirror%20House%20North/Camada%20205.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEzTWlycm9yIEhvdXNlIE5vcnRoL0NhbWFkYSAyMDUucG5nIiwiaWF0IjoxNjk2MzYxMzgyLCJleHAiOjI1NjAyNzQ5ODJ9.BSOkpBGsfBBbbxEbwvxqD2wdwJmEELRmbb4WeWPYrFA&t=2023-10-03T19%3A29%3A25.237Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/13Mirror%20House%20North/Camada%20206.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzEzTWlycm9yIEhvdXNlIE5vcnRoL0NhbWFkYSAyMDYucG5nIiwiaWF0IjoxNjk2MzYxMzkyLCJleHAiOjI1NjAyNzQ5OTJ9.ZjV0mnIRWZLAjlesG2TNljw4kOMjKS1I2bGcgdK53LQ&t=2023-10-03T19%3A29%3A34.931Z",
                ],
                price: 1144,
                highlights: [
                    "Cozinha",
                    "Wi-Fi",
                    "Estacionamento incluído",
                    "Piscina compartilhada",
                    "TV",
                    "Máquina de Lavar",
                    "Ar-condicionado",
                    "Pátio ou varanda",
                ],
                recommended: true,
                maxGuests: 4,
                checkIn: "14:00 - 21:00",
                checkOut: "antes das 11:00",
                type: "Especial",
            },
            // !Casa Proa - 14
            {
                name: "Casa Proa",
                description:
                    "Propriedade exclusiva e isolada projetada pelo premiado arquiteto dentro da Mata Atlântica com uma vista incrível e única para a Baía de Paraty. A vista pode ser apreciada a partir da cama ou da encantadora varanda do lado de fora do quarto. Quarto com A/C, WC privado e uma cozinha totalmente equipada. Wi-Fi incluído. Há uma bela e pacífica praia de areia a menos de 50 metros de distância e acessada (a pé) pela propriedade. As belezas desta casa está na serenidade da localização e do design moderno criado pelo premiado arquiteto Marko Brajovic. Esta área abriga muitos dos pássaros mais bonitos do Brasil, que podem ser apreciados na varanda (melhor de manhã e ao pôr do sol). Você pode até ouvir as ondas batendo abaixo. Combinada com os jardins da propriedade, esta propriedade é um oásis nas proximidades da cidade. A casa em si está decorada com uma mistura de móveis clássicos e modernos e tudo o que você precisa para tornar sua estadia agradável!",

                location: "Paraty, Brasil",
                locationDescription:
                    "A área de Corumbê é linda e super tranquila. A única propriedade ao lado da minha é uma famosa destilaria local de Cachaça. Estamos a 15 minutos de carro da cidade de Paraty, patrimônio mundial da UNESCO.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/14Casa%20Proa/Camada%20207.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE0Q2FzYSBQcm9hL0NhbWFkYSAyMDcucG5nIiwiaWF0IjoxNjk2MzYxNDcwLCJleHAiOjI1NjAyNzUwNzB9.ercQUY5fMaTGul0xbC096q7Gw58JwiIgGuzTr-L9Hwg&t=2023-10-03T19%3A30%3A53.232Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/14Casa%20Proa/Camada%20208.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE0Q2FzYSBQcm9hL0NhbWFkYSAyMDgucG5nIiwiaWF0IjoxNjk2MzYxNDgzLCJleHAiOjI1NjAyNzUwODN9.F2n07gGzdjVHfX1fyCybwEWUT58sIfjlYDj5rj0k_Sw&t=2023-10-03T19%3A31%3A06.560Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/14Casa%20Proa/Camada%20209.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE0Q2FzYSBQcm9hL0NhbWFkYSAyMDkucG5nIiwiaWF0IjoxNjk2MzYxNDk3LCJleHAiOjI1NjAyNzUwOTd9.F9lYTXwzA4T0ra2Fmiy3BaH7YRJdtwfQLV-o05A6qig&t=2023-10-03T19%3A31%3A20.141Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/14Casa%20Proa/Camada%20210.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE0Q2FzYSBQcm9hL0NhbWFkYSAyMTAucG5nIiwiaWF0IjoxNjk2MzYxNTExLCJleHAiOjI1NjAyNzUxMTF9.j-XDmI2_vcPRUDAwnyZd3unijb3LHR4GueMNBN7H_wQ&t=2023-10-03T19%3A31%3A34.330Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/14Casa%20Proa/Camada%20211.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE0Q2FzYSBQcm9hL0NhbWFkYSAyMTEucG5nIiwiaWF0IjoxNjk2MzYxNTI0LCJleHAiOjI1NjAyNzUxMjR9.APe5GWW8Z8UVA-gL6LpOKjT8xjIeiK1phcYD9ZqIzzs&t=2023-10-03T19%3A31%3A47.245Z",
                ],
                price: 950,
                highlights: [
                    "Vista para a baía",
                    "Acesso à praia",
                    "Cozinha",
                    "Wi-Fi",
                    "Estacionamento incluído",
                    "Ar-condicionado",
                    "Pátio ou varanda (Privativa)",
                    "Quintal",
                ],
                recommended: true,
                maxGuests: 2,
                checkIn: "após 15:00",
                checkOut: "antes das 11:00",
                type: "Chalé",
            },
            // !Modern Oceanfront - 15
            {
                name: "Modern Oceanfront",
                description:
                    "Oferecemos uma garantia de furacão sem preocupações. Apenas a 25 minutos de voo de Grand Cayman, esta nova casa oferece vistas deslumbrantes para o mar com todas as comodidades modernas para desfrutar do luxo descalço. Grandes janelas e o plano de piso aberto permitem vistas deslumbrantes da piscina e do mar e incluem uma cozinha totalmente equipada, refeições e áreas de estar. Também com vista para o oceano estão duas suítes king-size com banhos de azulejos. Um terceiro quarto tem uma cama queen-size e vistas para a folhagem tropical. Situada entre amendoeiras e palmeiras, a vila emana tranquilidade. A partir do momento em que a ampla vista para o mar recebe você ao entrar pela porta da frente, o relaxamento se mantém. As preocupações derretem à beira da piscina. Os sons do mar e as brisas proporcionam uma excelente soneca nas redes sob a cabana à beira-mar (há uma rede escondida escondida escondida em um nicho na folhagem ao lado da casa para uma escapada privada). Relaxe na jacuzzi não aquecida com os sons calmantes do surfe. A grelha a gás ao ar livre oferece um lugar para cozinhar o peixe do seu dia e há vários assentos para jantar ao ar livre sob as sombras solares. Crianças e adultos encontrarão inúmeras opções de entretenimento, desde jogos de tabuleiro a uma seleção de filmes favoritos em nosso servidor de mídia. Um sistema Xbox One oferece jogos, Netflix e música na tela curva de 65 4K principal. Todos os três quartos têm TVs LED de 40 com Netflix e Blu-ray players. A conectividade de alta velocidade com Wi-Fi manterá você ocupado baixando e jogando jogos em seu computador ou mantendo contato com o trabalho, se necessário. Oferecemos um telefone local para reservas de spa, jantar ou atividades aquáticas. Nós, também, fornecemos um telefone para chamadas gratuitas para os EUA e Canadá. Despensa e lavanderia separadas têm amplo armazenamento e uma lavadora e secadora de tamanho completo para sua conveniência.",

                location: "Stake Bay, Ilhas Cayman",
                locationDescription:
                    "Chuva ou sol, atividades na ilha abundam. Cayman Brac é um destino de mergulho de renome mundial. Mergulhe e mergulhe com snorkel na nossa praia ou assista a vários locais de mergulho marcados ao redor da ilha. Excursões de barco também estão disponíveis para mergulho, snorkeling e pesca. Use nosso caiaque para explorar a costa. A ilha também oferece caminhadas e oportunidades de escalada com muitas cavernas para explorar. Cayman Brac é um destino único, amigável e tranquilo, para aqueles que querem experimentar a verdadeira cultura de Cayman com sua beleza natural segura e sem restrições e sem abrir mão da qualidade e das comodidades que se experimenta em casa.",
                countryCode: "KY",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/15Modern%20Oceanfront/Camada%20227.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE1TW9kZXJuIE9jZWFuZnJvbnQvQ2FtYWRhIDIyNy5wbmciLCJpYXQiOjE2OTYzNjE1NDUsImV4cCI6MjU2MDI3NTE0NX0.8ZAX3Fvr3ltAOOdeZYhUKdV1afdV8D9JqSpehWbR1l4&t=2023-10-03T19%3A32%3A08.085Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/15Modern%20Oceanfront/Camada%20228.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE1TW9kZXJuIE9jZWFuZnJvbnQvQ2FtYWRhIDIyOC5wbmciLCJpYXQiOjE2OTYzNjE1NTgsImV4cCI6MjU2MDI3NTE1OH0.CuBiVyjuTD_KmWufQG7jlFqa5LrwfYVM-gCj2dOmSf0&t=2023-10-03T19%3A32%3A22.271Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/15Modern%20Oceanfront/Camada%20229.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE1TW9kZXJuIE9jZWFuZnJvbnQvQ2FtYWRhIDIyOS5wbmciLCJpYXQiOjE2OTYzNjE1NzEsImV4cCI6MjU2MDI3NTE3MX0.iqYm_D46chBEmMgLHICyOydAXPhqj00rHtlDW2m1RWI&t=2023-10-03T19%3A32%3A34.896Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/15Modern%20Oceanfront/Camada%20230.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE1TW9kZXJuIE9jZWFuZnJvbnQvQ2FtYWRhIDIzMC5wbmciLCJpYXQiOjE2OTYzNjE1ODIsImV4cCI6MjU2MDI3NTE4Mn0.9GA0pmHKg2l9X7b1hRRksUcxljdbbCs0qD1_QHYQ86w&t=2023-10-03T19%3A32%3A45.251Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/15Modern%20Oceanfront/Camada%20231.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE1TW9kZXJuIE9jZWFuZnJvbnQvQ2FtYWRhIDIzMS5wbmciLCJpYXQiOjE2OTYzNjE1OTQsImV4cCI6MjU2MDI3NTE5NH0.UEGzlwZux6ejNH_zKQ7dL_RkES2MBJOHouJYv0TzF_0&t=2023-10-03T19%3A32%3A56.986Z",
                ],
                price: 1578,
                highlights: [
                    "Vista para o oceano",
                    "Vista para o mar",
                    "Acesso à praia (à beira-mar)",
                    "Cozinha",
                    "Wi-Fi",
                    "Estacionamento incluído",
                    "Piscina privativa",
                    "TV",
                    "Máquina de Lavar",
                    "Secadora",
                ],
                recommended: true,
                maxGuests: 6,
                checkIn: "após 16:00",
                checkOut: "antes das 10:00",
                type: "Especial",
            },
            // !Casa Teia - 16
            {
                name: "Casa Teia",
                description:
                    "A casa Teia é uma casa futurista na Serra da Bocaina, há 10 km de Paraty. Está localizada na Aldeia Rizoma, condominio estruturado e seguro de casas integradas na floresta. Temos várias cachoeiras, com piscinas naturais e acesso privativo. Temos uma Agrofloresta, sauna seca, sala de ginástica integrada na natureza, trilhas e diversas experiências terapêuticas , ecológicas e astronômicas podem ser contratadas. Estamos numa área com uma das maiores biodiversidades do planeta.",

                location: "Rio de Janeiro, Brasil",
                locationDescription:
                    "A Aldeia Rizoma onde se encontra a Teia está em meio à mata Atlântica. Está a 10,5 km do trevo de entrada da cidade de Paraty.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/16Casa%20Teia/Camada%20242.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE2Q2FzYSBUZWlhL0NhbWFkYSAyNDIucG5nIiwiaWF0IjoxNjk2MzYxNjE3LCJleHAiOjI1NjAyNzUyMTd9.h7ck_BcAcEubmar8dY0NpzdXZ3Oj3pbyBJsh2iuLjnY&t=2023-10-03T19%3A33%3A20.360Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/16Casa%20Teia/Camada%20243.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE2Q2FzYSBUZWlhL0NhbWFkYSAyNDMucG5nIiwiaWF0IjoxNjk2MzYxNjMwLCJleHAiOjI1NjAyNzUyMzB9.w6FR4Nc4PPsazf7wu2iZzPICsaoDYfXzMgJHJnKzuGw&t=2023-10-03T19%3A33%3A34.319Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/16Casa%20Teia/Camada%20244.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE2Q2FzYSBUZWlhL0NhbWFkYSAyNDQucG5nIiwiaWF0IjoxNjk2MzYxNjQzLCJleHAiOjI1NjAyNzUyNDN9.-cx9WqRbX2rqRzyQIEa4nilWmAQC_CO1bUABo_8sc2M&t=2023-10-03T19%3A33%3A45.379Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/16Casa%20Teia/Camada%20245.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE2Q2FzYSBUZWlhL0NhbWFkYSAyNDUucG5nIiwiaWF0IjoxNjk2MzYxNjU3LCJleHAiOjI1NjAyNzUyNTd9.qfnffc74VxXoMlocnCYC_vDj1F8_vrEqi2MgK09Q3xk&t=2023-10-03T19%3A34%3A00.174Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/16Casa%20Teia/Camada%20246.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE2Q2FzYSBUZWlhL0NhbWFkYSAyNDYucG5nIiwiaWF0IjoxNjk2MzYxNjY4LCJleHAiOjI1NjAyNzUyNjh9.--FWAldISz_UMMT3zCCAN_wZ53iAW0O7Tp-0p9wjr2Y&t=2023-10-03T19%3A34%3A11.103Z",
                ],
                price: 579,
                highlights: [
                    "Vista para as montanhas",
                    "Vista para o mar",
                    "Vista para as águas",
                    "Cozinha",
                    "Wi-Fi",
                    "Estacionamento incluído",
                    "Espaço de trabalho exclusivo",
                    "Sauna Privativa",
                ],
                recommended: false,
                maxGuests: 3,
                checkIn: "15:00 - 20:00",
                checkOut: "antes das 11:00",
                type: "Especial",
            },
            // !Ocaso Luxury Villa - 17
            {
                name: "Ocaso Luxury Villa",
                description:
                    "Fuja para as montanhas! Este estúdio de joias escondidas acomoda dois adultos. A piscina e as áreas ao ar livre são partilhadas com outros três apartamentos. Esta é uma propriedade apenas para adultos e não são permitidas visitas. Apartamento: Apartamento estúdio espaçoso no primeiro andar em propriedade com entrada privada, colchão Queen e lençóis, decoração moderna e tropical, WIFI, smart TV, unidade de ar condicionado de alta eficiência, banheiro privativo com chuveiro, kitchenette com geladeira, microondas, cafeteira, vagens complementares e utensílios essenciais para refeições. Exterior: Vista panorâmica da piscina de borda infinita, do lounge e do gazebo para os hóspedes do Ocaso Luxury Villa. Chuveiro em cascata ao ar livre e banheiro são uma vantagem. Este apartamento faz parte de uma villa composta por quatro apartamentos. Áreas comuns como piscina, mirador e gazebo são compartilhadas com os hóspedes do Ocaso Luxury Villa.",
                location: "Atalaya, Porto Rico",
                locationDescription:
                    "Isolamento esplêO Castelo de Arenfels está localizado no meio dos vinhedos nos arredores de Bad Hönningen. Ele está localizado diretamente no Rheinsteig e, portanto, oferece o ponto de partida ideal para caminhadas. O centro da cidade com alguns restaurantes fica a 15 minutos a pé. O famoso Bad Hönninger Kristall-Rheinpark-Therme também pode ser alcançado a pé em 20 minutos e de carro em menos de cinco minutos. Os Bad Hönninger Rheinwiesen também estão localizados aqui, que o convidam a passear. Na cidade vizinha de Rheinbrohl foi uma vez o início do norte dos Limes. Fortificação romana e local de fortificação que é Patrimônio Mundial da UNESCO desde 2005. Há também um museu interessante aqui.ndido: a paisagem de Powys é dramática, inspiradora e perfeita para sua fuga da rotina. No nosso guia para a área abaixo, você encontrará muitas coisas para fazer na área local, incluindo assistir à alimentação dos papagaios vermelhos.",
                countryCode: "PR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/17Ocaso%20Luxury%20Villa/Camada%20152.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE3T2Nhc28gTHV4dXJ5IFZpbGxhL0NhbWFkYSAxNTIucG5nIiwiaWF0IjoxNjk2MzYxNjk5LCJleHAiOjI1NjAyNzUyOTl9.nrMeHBKDCCKxYinThA_TwMaiIABhuSglH1oDJ8WHOjk&t=2023-10-03T19%3A34%3A42.456Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/17Ocaso%20Luxury%20Villa/Camada%20153.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE3T2Nhc28gTHV4dXJ5IFZpbGxhL0NhbWFkYSAxNTMucG5nIiwiaWF0IjoxNjk2MzYxNzExLCJleHAiOjI1NjAyNzUzMTF9.mhLr0B4ne8VsX6GfxoSMbrYX3p7JiRnaIAANiul2zsY&t=2023-10-03T19%3A34%3A54.745Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/17Ocaso%20Luxury%20Villa/Camada%20154.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE3T2Nhc28gTHV4dXJ5IFZpbGxhL0NhbWFkYSAxNTQucG5nIiwiaWF0IjoxNjk2MzYxNzI0LCJleHAiOjI1NjAyNzUzMjR9.bqoPLTtWkcytNxYlZsbO72llJbUe4M9hwg-9lTRoDnY&t=2023-10-03T19%3A35%3A07.073Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/17Ocaso%20Luxury%20Villa/Camada%20155.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE3T2Nhc28gTHV4dXJ5IFZpbGxhL0NhbWFkYSAxNTUucG5nIiwiaWF0IjoxNjk2MzYxNzM1LCJleHAiOjI1NjAyNzUzMzV9.icV5IPCCRJtaf9qgqYiXvDVMMZweJlSIRRG9O_rY6vg&t=2023-10-03T19%3A35%3A17.845Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/17Ocaso%20Luxury%20Villa/Camada%20156.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE3T2Nhc28gTHV4dXJ5IFZpbGxhL0NhbWFkYSAxNTYucG5nIiwiaWF0IjoxNjk2MzYxNzQ1LCJleHAiOjI1NjAyNzUzNDV9.FxYy4QFCICjs4YhwtDQsFtcoU5dmLoVjxpj_ooIyybE&t=2023-10-03T19%3A35%3A28.475Z",
                ],
                price: 846,
                highlights: [
                    "Secador de cabelo",
                    "Internet e escritório",
                    "Wi-Fi",
                    "Cozinha e sala de jantar",
                    "Refrigerador",
                    "Microondas",
                    "Louças e talheres",
                    "Estacionamento incluído",
                    "Estacionamento gratuito na rua",
                    "Piscina",
                    "Ar livre",
                    "Pátio ou varanda",
                    "Móveis externos",
                    "Self check-in",
                    "Cofre de chaves",
                    "Entretenimento (TV)",
                ],
                recommended: true,
                maxGuests: 2,
                checkIn: "após 15:00",
                checkOut: "antes das 11:00",
                type: "Hotel",
            },
            // !Ipê da Serra - 18
            {
                name: "Ipê da Serra",
                description:
                    "Bem-vindo à nossa colmeia, um lugar caloroso e inclusivo para todos os nossos visitantes! Permita-nos apresentar e orientá-lo através do nosso adorável espaço, repleto de comodidades e beleza natural. A acessibilidade é uma prioridade para nós. O primeiro andar da nossa casa é inteiramente acessível a cadeiras de rodas, com quartos e banheiros adaptados para garantir uma estadia confortável para todos. No entanto, é importante notar que, para acessar o segundo e terceiro andares, existem escadas disponíveis. Nossa propriedade se estende por cerca de 3000 metros quadrados e é completamente cercada, proporcionando privacidade e segurança. Além disso, dispomos de um grande portão elétrico para facilitar o acesso. Estacionamento não é uma preocupação por aqui, pois temos espaço para até cinco carros dentro da casa, além de opções adicionais na rua. Inclusive, oferecemos dois espaços internos dedicados ao estacionamento para maior comodidade. Convidamos você a explorar o restante da nossa propriedade, que oferece muitas surpresas naturais, incluindo um riacho sereno, árvores frutíferas e fontes de água. A observação de pássaros é uma experiência relaxante que pode ser desfrutada da varanda, do primeiro andar ou mesmo das áreas de leitura, graças às grandes janelas hexagonais que proporcionam uma vista deslumbrante.",

                location: "Brasília, Brasil",
                locationDescription:
                    "Localizada em Brasília, no Distrito Federal, Brasil. Esta casa é notável por seu design inovador e sustentável, construída a partir de containers de transporte reutilizados. Combinando a estética industrial dos containers com a beleza natural da paisagem da região, o Ipê da Serra Casa Container se destaca como um exemplo inspirador de arquitetura contemporânea.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/18Ipe%20da%20Serra/Camada%20106.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE4SXBlIGRhIFNlcnJhL0NhbWFkYSAxMDYucG5nIiwiaWF0IjoxNjk2MzYxNzY5LCJleHAiOjI1NjAyNzUzNjl9.gk7reV3718E0Pcbyh5PEqhA7fgHYO-ZfLtNBS_E9NBI&t=2023-10-03T19%3A35%3A52.342Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/18Ipe%20da%20Serra/Camada%20107.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE4SXBlIGRhIFNlcnJhL0NhbWFkYSAxMDcucG5nIiwiaWF0IjoxNjk2MzYxNzgwLCJleHAiOjI1NjAyNzUzODB9.9AyVHQO08m-E0Uk1FEvM0CAndIHu9hUfUhZnc1c7mcg&t=2023-10-03T19%3A36%3A02.913Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/18Ipe%20da%20Serra/Camada%20108.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE4SXBlIGRhIFNlcnJhL0NhbWFkYSAxMDgucG5nIiwiaWF0IjoxNjk2MzYxNzkzLCJleHAiOjI1NjAyNzUzOTN9.IVN5tWImukDjggII6B5oEPiF8omd1TVs_ukXFq97yTo&t=2023-10-03T19%3A36%3A15.879Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/18Ipe%20da%20Serra/Camada%20109.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE4SXBlIGRhIFNlcnJhL0NhbWFkYSAxMDkucG5nIiwiaWF0IjoxNjk2MzYxODA4LCJleHAiOjI1NjAyNzU0MDh9.eWJ0gw4PP3tvdaFgwL2mhUl94LxITtcg2_N_ZOV5tEA&t=2023-10-03T19%3A36%3A31.294Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/18Ipe%20da%20Serra/Camada%20110.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE4SXBlIGRhIFNlcnJhL0NhbWFkYSAxMTAucG5nIiwiaWF0IjoxNjk2MzYxODI1LCJleHAiOjI1NjAyNzU0MjV9.xAr-vQbKD5Ydt_otHUOFh1tSSKY-0iXWxShxjd1wUas&t=2023-10-03T19%3A36%3A48.495Z",
                ],
                price: 660,
                highlights: [
                    "Cozinha",
                    "Wi-Fi",
                    "Estacionamento incluído",
                    "Piscina privativa externa",
                    "Permitido animais",
                    "TV",
                    "Máquina de Lavar",
                    "Ar-condicionado",
                ],
                recommended: false,
                maxGuests: 6,
                checkIn: "após 15:00",
                checkOut: "antes das 11:00",
                type: "Pousada",
            },
            // !Ocean 's Edge - 19
            {
                name: "Ocean 's Edge",
                description:
                    "Propriedade à beira-mar com beleza ao redor. Saia pela porta dos fundos e entre em águas cristalinas. Mergulho com snorkel, paddle board, caiaque e muito mais podem ser vistos a poucos passos de sua casa. Perto estão mercearias, restaurantes, bares, bem como a famosa atração das Cavernas de Cristal das Ilhas Cayman. A casa é brilhante e cheia de espaço. 4 quartos todos têm banheiros anexados. Abundância de móveis de exterior para sentar, relaxar e apreciar as vistas de Ocean 's Edge. Mais de 2.000 metros quadrados dentro e muito espaço para muitos hóspedes se sentirem confortáveis. A parede das janelas permite que você tenha vistas da água durante todo o dia e fornece muita luz que ilumina toda a casa. Há também muito espaço de estacionamento gratuito disponível diretamente ao lado da casa.",

                location: "North Side, Ilhas Cayman",
                locationDescription:
                    "O North Side é uma encantadora comunidade localizada nas Ilhas Cayman, um território britânico ultramarino no Caribe. Essa área é conhecida por sua beleza natural deslumbrante e atmosfera tranquila, tornando-se um refúgio popular para quem busca relaxamento e desconexão. O North Side oferece aos visitantes e residentes praias de areias brancas intocadas e águas cristalinas perfeitas para atividades como natação, mergulho com snorkel e passeios de barco. A paisagem costeira é salpicada de enseadas pitorescas e recifes de coral, proporcionando oportunidades excepcionais para explorar a vida marinha exuberante da região.",
                countryCode: "KY",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/19Ocean%20s%20Edge/Camada%20126.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE5T2NlYW4gcyBFZGdlL0NhbWFkYSAxMjYucG5nIiwiaWF0IjoxNjk2MzYxODUxLCJleHAiOjI1NjAyNzU0NTF9.SuKACy3WPc8vIY3RCqoOsChD5FSC4xl4vTfCE1CJ1FA&t=2023-10-03T19%3A37%3A14.256Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/19Ocean%20s%20Edge/Camada%20127.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE5T2NlYW4gcyBFZGdlL0NhbWFkYSAxMjcucG5nIiwiaWF0IjoxNjk2MzYxODY1LCJleHAiOjI1NjAyNzU0NjV9.3YKX9OT1ueRUMs601P3dajegvn8Y9avtshhY3rHWK8A&t=2023-10-03T19%3A37%3A28.538Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/19Ocean%20s%20Edge/Camada%20128.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE5T2NlYW4gcyBFZGdlL0NhbWFkYSAxMjgucG5nIiwiaWF0IjoxNjk2MzYxODc1LCJleHAiOjI1NjAyNzU0NzV9.wYiQBDYja6dbaqwFTmEwE9Z9id4c5pGeqnsRpHuO-nA&t=2023-10-03T19%3A37%3A37.754Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/19Ocean%20s%20Edge/Camada%20129.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE5T2NlYW4gcyBFZGdlL0NhbWFkYSAxMjkucG5nIiwiaWF0IjoxNjk2MzYxODg3LCJleHAiOjI1NjAyNzU0ODd9.fomXIMv9z4KgE4nb5L4fNdk530w8OCSLb0ROp-zXx50&t=2023-10-03T19%3A37%3A50.407Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/19Ocean%20s%20Edge/Camada%20130.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzE5T2NlYW4gcyBFZGdlL0NhbWFkYSAxMzAucG5nIiwiaWF0IjoxNjk2MzYxODk2LCJleHAiOjI1NjAyNzU0OTZ9.SGXSxGLqynC_A2QIJdCarN8THrJbZ8DRSAFrIimjM1U&t=2023-10-03T19%3A37%3A58.870Z",
                ],
                price: 1623,
                highlights: [
                    "Vista para o oceano",
                    "Vista para o mar",
                    "Acesso Privativo à praia (à beira-mar)",
                    "Cozinha",
                    "Wi-Fi rápido (268 Mbps)",
                    "Espaço de trabalho exclusivo",
                    "Estacionamento incluído",
                    "HDTV com TV a cabo premium, Aparelho de DVD",
                    "Máquina de lavar na acomodação por Gratuito",
                ],
                recommended: true,
                maxGuests: 10,
                checkIn: "16:00 - 18:00",
                checkOut: "antes das 10:00",
                type: "Hotel",
            },
            // !Paradise - 20
            {
                name: "Paradise",
                description:
                    "Venha desfrutar de dias inesquecíveis nesse delicioso chalé, arquitetura de inspiração escandinava, feito com conceitos de baixíssimo impacto ambiental, ecofriendly. Internet de super velocidade da Starlink e sistema de energia elétrica solar, off grid. Ducha a gás, iluminação deliciosa, roupas de cama 300 fios, toalha banhão e um aquecedor a lenha para aqueles dias frios. Aproximadamente quinze minutinhos do centrinho, local de pura paz.",

                location: "Paraty, Brasil",
                locationDescription:
                    "Nossa propriedade está localizada em um pequeno bairro muito tranquilo nas montanhas de Paraty, bem na fronteira com o Parque Nacional da Serra da Bocaina, uma das maiores áreas de preservação da Mata Atlântica do país. Há uma comunidade local incrível que vive em torno de nossa propriedade e eles são sempre super acolhedores. Para obter comida e suprimentos, você pode dirigir 10 minutos até um supermercado próximo. Além disso, ao lado do nosso portão de entrada há um restaurante local e uma pequena loja com produtos de origem local. A uma curta distância, você pode verificar o antigo Caminho do Ouro, onde toda a mineração e o ouro costumam passar a caminho de Portugal, quando o Brasil ainda era uma colônia. Existem mais de 2000 espécies de pássaros e você provavelmente pode avistar do convés da casa os pássaros mais bonitos que você já viu em sua vida. Se você tiver sorte o suficiente, você pode até mesmo avistar macacos e outros animais selvagens.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/20Paradise/Camada%20241.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIwUGFyYWRpc2UvQ2FtYWRhIDI0MS5wbmciLCJpYXQiOjE2OTYzNjE5MjgsImV4cCI6MjU2MDI3NTUyOH0.uanjQSIbQ-8jcHPA17DTI6yXTGkQZH_foZyz_iv6thg&t=2023-10-03T19%3A38%3A32.526Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/20Paradise/Camada%20240.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIwUGFyYWRpc2UvQ2FtYWRhIDI0MC5wbmciLCJpYXQiOjE2OTYzNjE5NDYsImV4cCI6MjU2MDI3NTU0Nn0.ALBlGSTofyEu5CNbxBt-m4crc0sfev5vX_bzGUJ-wYY&t=2023-10-03T19%3A38%3A49.251Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/20Paradise/Camada%20239.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIwUGFyYWRpc2UvQ2FtYWRhIDIzOS5wbmciLCJpYXQiOjE2OTYzNjE5NjEsImV4cCI6MjU2MDI3NTU2MX0.FrL7HRPxssuzPPEOLWhPSsw8l05O3VjdWYW7iVOglk0&t=2023-10-03T19%3A39%3A04.201Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/20Paradise/Camada%20238.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIwUGFyYWRpc2UvQ2FtYWRhIDIzOC5wbmciLCJpYXQiOjE2OTYzNjE5NzMsImV4cCI6MjU2MDI3NTU3M30.iP7eRJbRgB7QC6NnsTGxUg5ijCiQBclH8obKae4XLPc&t=2023-10-03T19%3A39%3A16.283Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/20Paradise/Camada%20237.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIwUGFyYWRpc2UvQ2FtYWRhIDIzNy5wbmciLCJpYXQiOjE2OTYzNjE5ODIsImV4cCI6MjU2MDI3NTU4Mn0.udnXVU3gRFq_9GVm0a1BfL1BTLrlFdBqu1Pakjy-TZs&t=2023-10-03T19%3A39%3A26.408Z",
                ],
                price: 1040,
                highlights: [
                    "Vista para as montanhas",
                    "Cozinha",
                    "Wi-Fi",
                    "Estacionamento incluído",
                    "Permitido animais",
                    "Pátio ou varanda (Privativa)",
                    "Quintal compartilhado — não é totalmente cercado",
                    "Lareira interna: a lenha",
                ],
                recommended: false,
                maxGuests: 2,
                checkIn: "13:00 - 22:00",
                checkOut: "antes das 13:00",
                type: "Chalé",
            },
            // !Whispering Pines - 21
            {
                name: "Whispering Pines",
                description:
                    "A casa na árvore está localizada nas florestas de pinheiros subtropicais do Himalaia. A casa é aconchegante tanto no inverno quanto no verão. Tem uma vista de 360 graus dos grandes Himalaias. Temos a melhor comida no Jibhi e a melhor vista da cidade. Nossa casa de campo está localizada na bela vila de Tandi de Banjar Valley, oferecendo uma vista de 360 graus do poderoso Himalaia. Projetamos nossas casas de campo sem perturbar as florestas de pinheiros e as tornamos parte integrante de nossos interiores. Você vai experimentar o calor da cultura e hospitalidade Himachali aqui. Projetados com muito amor e carinho, acomodamos 1 quarto de casal e um sótão com camas de casal e de solteiro. Desfrute de uma deliciosa comida caseira de estilo Himachali e passe as noites sob os céus estrelados. Oferecemos comida de acordo com os pedidos dos hóspedes também. Nós também fornecemos caminhadas de um dia para a floresta nas proximidades.",

                location: "Jibhi, Índia",
                locationDescription:
                    "Tandi é uma vila remota acima de Jibhi, a 8 quilômetros de carro do mercado de Jibhi. É uma bela aldeia com campos de trigo e milho, pereiras e pomares de maçãs. A casa na árvore é cercada por florestas montanhosas por todos os lados. Não há nada nas proximidades, além de uma aldeia pouco povoada de cerca de 100 pessoas. A cachoeira se origina aqui. Tandi é a aldeia mais bonita da área de Jibhi. Você terá uma vida muito confortável aqui, longe de tudo.",
                countryCode: "IN",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/21Whispering%20Pines/Camada%20197.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIxV2hpc3BlcmluZyBQaW5lcy9DYW1hZGEgMTk3LnBuZyIsImlhdCI6MTY5NjM2MjAwNCwiZXhwIjoyNTYwMjc1NjA0fQ.vumrAqUy1jS3daMFbb67c_L3RpGIQBE-KuZrXgO7_N0&t=2023-10-03T19%3A39%3A46.352Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/21Whispering%20Pines/Camada%20198.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIxV2hpc3BlcmluZyBQaW5lcy9DYW1hZGEgMTk4LnBuZyIsImlhdCI6MTY5NjM2MjAxOCwiZXhwIjoyNTYwMjc1NjE4fQ.BLQ7jHRHo2ppKBrT5lEz9lpHyOof1Fm_Xh_GQEXGXmQ&t=2023-10-03T19%3A40%3A00.544Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/21Whispering%20Pines/Camada%20199.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIxV2hpc3BlcmluZyBQaW5lcy9DYW1hZGEgMTk5LnBuZyIsImlhdCI6MTY5NjM2MjAyNSwiZXhwIjoyNTYwMjc1NjI1fQ.2XEjRD-nMxl9NXuCzq60Yg2yMQyE1eIjBsd7H9dgs1w&t=2023-10-03T19%3A40%3A08.053Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/21Whispering%20Pines/Camada%20200.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIxV2hpc3BlcmluZyBQaW5lcy9DYW1hZGEgMjAwLnBuZyIsImlhdCI6MTY5NjM2MjAzNiwiZXhwIjoyNTYwMjc1NjM2fQ.ADfTCtI4LkoWKFZskKMgN4nF7la_zttDJDYedRXRhTA&t=2023-10-03T19%3A40%3A18.874Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/21Whispering%20Pines/Camada%20201.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIxV2hpc3BlcmluZyBQaW5lcy9DYW1hZGEgMjAxLnBuZyIsImlhdCI6MTY5NjM2MjA0NywiZXhwIjoyNTYwMjc1NjQ3fQ.Avwh9iTZGQHKC8H5Gjm7RyOFyRngkbT9zjp-ta-9zWw&t=2023-10-03T19%3A40%3A30.569Z",
                ],
                price: 357,
                highlights: [
                    "Vista para as montanhas",
                    "Vista para o vale",
                    "Cozinha",
                    "Wi-Fi",
                    "Espaço de trabalho exclusivo",
                    "Estacionamento incluído",
                    "Permitido animais",
                    "Máquina de Lavar",
                ],
                recommended: true,
                maxGuests: 4,
                checkIn: "12:00 - 23:00",
                checkOut: "antes das 11:00",
                type: "Chalé",
            },
            // !Toca da Araucária - 22
            {
                name: "Toca da Araucária",
                description:
                    "Localizada junto ao Recanto De Conto interior de Nova Prata, a Toca da Araucária é uma construção subterrânea temática, feita artesanalmente pela família. A casa acomoda até 2 adultos e 1 criança (no mesmo quarto, uma cama de casal e um sofá-cama de 1,5m), banheiro privativo e cozinha equipada com frigobar, fogão, micro-ondas e utensílios. Conta com ar condicionado, aquecimento de água à gás e conectividade Wi-fi. Disponibilizamos roupas de cama e banho. Inspirados pelas fantasias nas Terras Médias e junto ao nosso amor pelo fazer, resolvemos construir nós mesmos a Toca da Araucária. Praticamente tudo foi feito por nós, dando assim mais personalidade e exclusividade ao espaço. A Toca da Araucária está localizada na Comunidade do Gramado, junto ao Recanto De Conto, a 4 km de distância do centro da cidade de Nova Prata/RS e possui todo o acesso asfaltado. A casa conta com livros e objetos temáticos que podem ser usufruídos durante a estadia. Para sua maior comodidade, roupas de cama e banho são disponibilizadas, também eletrodomésticos, utensílios de cozinha e Wi-fi. A Toca fica em meio à natureza, onde pode-se ouvir o canto dos pássaros e apreciar belas paisagens! Todo o espaço externo no Recanto fica disponível para os hóspedes. A acomodação fica aos fundos do terreno, mas a uma distância que permite privacidade para todos.",

                location: "Nova Prata, Brasil",
                locationDescription:
                    "Localizada na Serra Gaúcha, uma região montanhosa no estado do Rio Grande do Sul, Brasil. Essa casa é notável por seu design inspirado nas tocas dos hobbits, personagens do universo literário criado por J.R.R. Tolkien. Ela é um verdadeiro refúgio de conto de fadas, com uma estética que lembra as casas aconchegantes e rústicas dos hobbits da Terra-média.",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/22Toca%20da%20Araucaria/Camada%20116.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIyVG9jYSBkYSBBcmF1Y2FyaWEvQ2FtYWRhIDExNi5wbmciLCJpYXQiOjE2OTYzNjIwNjcsImV4cCI6MjU2MDI3NTY2N30.rN7wbrll5rd_LaFVrDPHQxwzWs2_t-LFaPm6---K7MU&t=2023-10-03T19%3A40%3A49.719Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/22Toca%20da%20Araucaria/Camada%20117.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIyVG9jYSBkYSBBcmF1Y2FyaWEvQ2FtYWRhIDExNy5wbmciLCJpYXQiOjE2OTYzNjIwODMsImV4cCI6MjU2MDI3NTY4M30.zjoa_yq9G7Pfq-DghgaXTwhCLJ7HMLzeNkU6tMRKr38&t=2023-10-03T19%3A41%3A05.404Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/22Toca%20da%20Araucaria/Camada%20118.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIyVG9jYSBkYSBBcmF1Y2FyaWEvQ2FtYWRhIDExOC5wbmciLCJpYXQiOjE2OTYzNjIwOTUsImV4cCI6MjU2MDI3NTY5NX0.AemBp-VoBLKEIk7jXaMXLz5C4LyOr6Rx2Kk3LIUcQeM&t=2023-10-03T19%3A41%3A18.676Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/22Toca%20da%20Araucaria/Camada%20119.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIyVG9jYSBkYSBBcmF1Y2FyaWEvQ2FtYWRhIDExOS5wbmciLCJpYXQiOjE2OTYzNjIxMDgsImV4cCI6MjU2MDI3NTcwOH0.NZ7XqF1m61fzvlaq3JRhed4wEFT3eGD_gr7KtkbQSSI&t=2023-10-03T19%3A41%3A30.821Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/22Toca%20da%20Araucaria/Camada%20120.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIyVG9jYSBkYSBBcmF1Y2FyaWEvQ2FtYWRhIDEyMC5wbmciLCJpYXQiOjE2OTYzNjIxMTksImV4cCI6MjU2MDI3NTcxOX0.3A9fk2z10zKc8BQEgnLNKY2dloPPzJgXDCW8XuLGzqE&t=2023-10-03T19%3A41%3A41.850Z",
                ],
                price: 486,
                highlights: [
                    "Vista para o pátio",
                    "Vista para o jardim",
                    "Cozinha",
                    "Wi-Fi",
                    "Espaço de trabalho exclusivo",
                    "Estacionamento incluído",
                    "Jacuzzi privativa",
                    "Permitido animais",
                    "Pátio ou varanda (Privativa)",
                ],
                recommended: false,
                maxGuests: 3,
                checkIn: "15:00 - 20:00",
                checkOut: "antes das 12:00",
                type: "Pousada",
            },
            // !Zion EcoCabin - 23
            {
                name: "Zion EcoCabin",
                description:
                    "Aproveite o sol e relaxe no Zion EcoCabin A-Frame! Esta estrutura única tem uma banheira de hidromassagem privada com vista para a primeira fila das Montanhas South Zion! A porta conversível na cabana abre totalmente, permitindo que os confortos internos desta cabana aconchegante se misture perfeitamente com a natureza deslumbrante dos desfiladeiros de rocha vermelha. A estrutura de 144 pés quadrados oferece uma cama king size, frigobar e um conceito ao ar livre que ajuda a reconectar o ser humano e a natureza, permitindo que você aproveite o deslumbrante mundo natural ao seu redor.",

                location: "Hildale, Estados Unidos",
                locationDescription:
                    "Estamos localizados na base de um cânion em Hildale, Utah, perto o suficiente de algumas comodidades locais (padarias, 5-6 opções de jantar e café, uma cervejaria e um mercado de tamanho completo a menos de 10 minutos de distância), mas longe o suficiente para que os hóspedes possam desfrutar de um pouco de paz e solidão. Hildale tem belas formações de arenito e atrações como Water Canyon Trailhead nas proximidades, Gooseberry Mesa e Maxwell Park. O terreno é muito parecido com o Parque Nacional de Zion. Esta região é especialmente conhecida por caminhadas, ciclismo de montanha e trilhas de quadriciclo. Estamos a 50 min. do Parque Nacional de Zion, 45 min. De Kanab, Utah e a menos de 2 horas do Parque Nacional Bryce Canyon, do Parque Nacional do Grand Canyon e Page, AZ.",
                countryCode: "US",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/23Zion%20EcoCabin/Camada%20131.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIzWmlvbiBFY29DYWJpbi9DYW1hZGEgMTMxLnBuZyIsImlhdCI6MTY5NjM2MjE0MywiZXhwIjoyNTYwMjc1NzQzfQ.MGPcX2l7uhxtUCtrsp6VzlnS-am0nduqLoJ_vlV5eTs&t=2023-10-03T19%3A42%3A05.444Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/23Zion%20EcoCabin/Camada%20132.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIzWmlvbiBFY29DYWJpbi9DYW1hZGEgMTMyLnBuZyIsImlhdCI6MTY5NjM2MjE1MSwiZXhwIjoyNTYwMjc1NzUxfQ.pcTQOfeag814HT4N2TtnH2ejjIp9j9NJUzTbd-Ww4Lw&t=2023-10-03T19%3A42%3A14.250Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/23Zion%20EcoCabin/Camada%20133.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIzWmlvbiBFY29DYWJpbi9DYW1hZGEgMTMzLnBuZyIsImlhdCI6MTY5NjM2MjE2MSwiZXhwIjoyNTYwMjc1NzYxfQ.HGGEE4OF4OBsmJNoRLvWLNQcahR3s3LaHutQOUKJax4&t=2023-10-03T19%3A42%3A23.574Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/23Zion%20EcoCabin/Camada%20134.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIzWmlvbiBFY29DYWJpbi9DYW1hZGEgMTM0LnBuZyIsImlhdCI6MTY5NjM2MjE3MywiZXhwIjoyNTYwMjc1NzczfQ.nIvx7uAlJNcwHbX2muyQfz9cV7HGAKmt-yndpmPFXKM&t=2023-10-03T19%3A42%3A35.911Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/23Zion%20EcoCabin/Camada%20135.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzIzWmlvbiBFY29DYWJpbi9DYW1hZGEgMTM1LnBuZyIsImlhdCI6MTY5NjM2MjE4NSwiZXhwIjoyNTYwMjc1Nzg1fQ.cdBYD9ig3zhAgw8t4cC6BSTjqkmIGPNY9oW-wTcQj78&t=2023-10-03T19%3A42%3A48.250Z",
                ],
                price: 3149,
                highlights: [
                    "Vista para as montanhas",
                    "Vista para o deserto",
                    "Vista para o vale",
                    "Banheiro",
                    "Secador de cabelo",
                    "Climatização",
                    "Ar-condicionado",
                    "Aquecimento Central",
                    "Segurança doméstica",
                    "Detector de fumaça",
                    "Alarme de monóxido de carbono",
                    "Extintor de incêndio",
                    "Kit de primeiros socorros",
                    "Cozinha e sala de jantar",
                    "Refrigerador",
                    "Itens básicos de cozinha",
                ],
                recommended: true,
                maxGuests: 2,
                checkIn: "após 15:00",
                checkOut: "antes das 10:00",
                type: "Chalé",
            },
            // !Sakura Blossom - 24
            {
                name: "Sakura Blossom",
                description:
                    "O refúgio é de total exclusividade do hóspede , temos um único chalé rústico , com um quintal cercado e um amplo deck , com rede e balanço pra relaxar e ouvir o som das águas do rio e dos pássaros , da área do balanço você terá acesso a uma pequena trilha ao rio , rio com uma pequena queda dágua , exclusivo para que possa relaxar com sua família tranquilamente. Aqui você vive momentos únicos em contato com a natureza , se reencontra , se conecta ao que importa .Aqui á amor, história.",

                location: "Sapucaí-Mirim, Brasil",
                locationDescription:
                    "Estamos localizados na zona rural de Sapucai-Mirim percurso de 10 km em estrada de terra , próximo a cidades como Sao Bento do Sapucaí á 22 km ( 35 minutos) , á 40 km de Campos do Jordão ( 1 hora) , a 26 km de Santo Antônio do Pinhal (45minutos ) , á 14 km de Sapucaí-Mirim Mg (30 minutos) , e a 60 km de Monte Verde (2horas e 46 minutos).",
                countryCode: "BR",
                coverImage:
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/24Sakura%20Blossom/01.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzI0U2FrdXJhIEJsb3Nzb20vMDEucG5nIiwiaWF0IjoxNjk2MzYyMjA3LCJleHAiOjI1NjAyNzU4MDd9.vfJJ0vAOshcxl9DMvqw47tdahA0SVgbEO6wtDznzF1k&t=2023-10-03T19%3A43%3A09.975Z",
                imagesUrl: [
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/24Sakura%20Blossom/02.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzI0U2FrdXJhIEJsb3Nzb20vMDIucG5nIiwiaWF0IjoxNjk2MzYyMjE3LCJleHAiOjI1NjAyNzU4MTd9.HO6z8LY96DRS2PwyNyhzvBlbKLML0HeCJoFmv7lPlgE&t=2023-10-03T19%3A43%3A19.342Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/24Sakura%20Blossom/03.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzI0U2FrdXJhIEJsb3Nzb20vMDMucG5nIiwiaWF0IjoxNjk2MzYyMjI3LCJleHAiOjI1NjAyNzU4Mjd9.ULHmBYXEaHSbfUm751fQQIm8ahmBYYQMd8C-w-efiwA&t=2023-10-03T19%3A43%3A29.416Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/24Sakura%20Blossom/04.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzI0U2FrdXJhIEJsb3Nzb20vMDQucG5nIiwiaWF0IjoxNjk2MzYyMjM3LCJleHAiOjI1NjAyNzU4Mzd9.OmXmEaTSNcnxVmOSlsQcp8W3xWq3Mb47CyndKqJqtRQ&t=2023-10-03T19%3A43%3A39.489Z",
                    "https://jghdcweypzxylqpmrvsn.supabase.co/storage/v1/object/sign/imagesUrls/24Sakura%20Blossom/05.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXNVcmxzLzI0U2FrdXJhIEJsb3Nzb20vMDUucG5nIiwiaWF0IjoxNjk2MzYyMjQ3LCJleHAiOjI1NjAyNzU4NDd9.F7X4_0SYDIXFCjP_BdyqvTldjVMAY4dTMoGmXXZ7QLc&t=2023-10-03T19%3A43%3A49.696Z",
                ],
                price: 310,
                highlights: [
                    "Vista para as montanhas",
                    "Vista para o rio",
                    "Vista para o vale",
                    "Permitido animais",
                    "Wi-Fi",
                    "Cozinha",
                    "Acesso ao lago",
                    "TV",
                    "Café da manhã",
                    "Churrasqueira",
                    "Jacuzzi privativa",
                    "Estacionamento incluído",
                ],
                recommended: false,
                maxGuests: 4,
                checkIn: "após 16:00",
                checkOut: "antes das 13:00",
                type: "Chalé",
            },
        ],
    });
    const goods = await prisma.good.findMany();

    return goods;
};

const AllGoods = async () => {
    const data = await fetchGoods();
    await prisma.$disconnect();

    return (
        <section className="w-full mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center gap-2">
            {data.map((good: any) => (
                <GoodItem key={good.id} good={good} />
            ))}
        </section>
    );
};

export default AllGoods;
