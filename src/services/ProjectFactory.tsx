import BaseFactory from './BaseFactory';
import { Project } from '../../models/Project';
export default class ProjectFactory extends BaseFactory{

    constructor(){
        super({baseRoute: ''});
    }

    static async getProjectsCarousel(): Promise<(Array<Project>)>{
        return [
            {
                title: 'Saintia Shô',
                description: `Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Fusce non nunc nunc. Cras fringilla
                    rhoncus ultrices. Proin convallis arcu sollicitudin,
                    pretium arcu eget, venenatis diam. Mauris molestie vel
                    elit ac lobortis. Donec ullamcorper velit a sapien 
                    accumsan, at condimentum tortor cursus.`,
                image: {
                    background: 'http://localhost:8080/public/projects/saintiaSho/bg.jpg',
                    main: 'http://localhost:8080/public/projects/saintiaSho/main.jpg'
                },
                creator: {
                    name: 'Mikasa',
                    username: 'mikasa',
                    image: {
                        profile: 'http://localhost:8080/public/users/mikasa.jpg'
                    }
                },
                bag: {
                    meta: 3000.00,
                    collected: 730.00
                }
            },
            {
                title: 'Dragon Ball Super',
                description: `Nam ultrices pretium purus, quis convallis 
                    ligula suscipit ac. Pellentesque vehicula nulla sit 
                    amet tincidunt blandit. Integer scelerisque eros a 
                    quam convallis faucibus. Integer rutrum nunc est. 
                    Praesent sed sapien sed dui ultrices tempor. Aliquam 
                    malesuada ultrices elit non dapibus. Praesent lacus 
                    elit, congue sit amet sodales vel, viverra vel lectus.`,
                image: {
                    background: 'http://localhost:8080/public/projects/dragonBall/bg.jpg',
                    main: 'http://localhost:8080/public/projects/dragonBall/main.jpg'
                },
                creator: {
                    name: 'Gustavo Rosário',
                    username: 'gmastersupreme',
                    image: {
                        profile: 'http://localhost:8080/public/users/gus.jpeg'
                    }
                },
                bag: {
                    meta: 2000.00,
                    collected: 1500.00
                }
            },
            {
                title: 'Boku no Hero',
                description: `Nam ultrices pretium purus, quis convallis 
                    ligula suscipit ac. Pellentesque vehicula nulla sit 
                    amet tincidunt blandit. Integer scelerisque eros a 
                    quam convallis faucibus. Integer rutrum nunc est. 
                    Praesent sed sapien sed dui ultrices tempor. Aliquam 
                    malesuada ultrices elit non dapibus. Praesent lacus 
                    elit, congue sit amet sodales vel, viverra vel lectus.`,
                image: {
                    background: 'http://localhost:8080/public/projects/bokuNoHero/bg.jpg',
                    main: 'http://localhost:8080/public/projects/bokuNoHero/main.jpg'
                },
                creator: {
                    name: 'Nadine Wegas',
                    username: 'nadinewegas',
                    image: {
                        profile: 'http://localhost:8080/public/users/nadine.jpg'
                    }
                },
                bag: {
                    meta: 2000.00,
                    collected: 500.00
                }
            },
            {
                title: 'Ashe: Mãe Guerreira edição especial #01',
                description: `Criada nas florestas selvagens do norte, 
                    Ashe é uma glacinata, uma guerreira dotada de uma 
                    conexão mágica com sua terra congelada – e sobrecarregada 
                    pelas expectativas fanáticas de sua mãe. Quando 
                    eles partem em uma perigosa busca pela verdade por 
                    trás de um mito antigo, os laços são quebrados, 
                    os segredos vêm à luz e Runeterra é mudada para 
                    sempre.`,
                image: {
                    background: 'http://localhost:8080/public/projects/lol/bg.jpg',
                    main: 'http://localhost:8080/public/projects/lol/main.jpeg'
                },
                creator: {
                    name: 'Stephany Tenório',
                    username: 'stebani',
                    image: {
                        profile: 'http://localhost:8080/public/users/ste.jpg'
                    }
                },
                bag: {
                    meta: 12000.00,
                    collected: 9345.00
                }
            }
        ];
    }


    static async getProjects(): Promise<(Array<Project>)>{
        return [
            {
                title: 'Saintia Shô',
                description: `Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Fusce non nunc nunc. Cras fringilla
                    rhoncus ultrices. Proin convallis arcu sollicitudin,
                    pretium arcu eget, venenatis diam. Mauris molestie vel
                    elit ac lobortis. Donec ullamcorper velit a sapien 
                    accumsan, at condimentum tortor cursus.`,
                image: {
                    background: 'http://localhost:8080/public/projects/saintiaSho/bg.jpg',
                    main: 'http://localhost:8080/public/projects/saintiaSho/main.jpg'
                },
                creator: {
                    name: 'Mikasa',
                    username: 'mikasa',
                    image: {
                        profile: 'http://localhost:8080/public/users/mikasa.jpg'
                    }
                },
                bag: {
                    meta: 3000.00,
                    collected: 730.00
                },
                category: 'shonen'
            },
            {
                title: 'Mayara & Annabelle',
                description: `Mayara e Annabelle é uma série de quadrinhos 
                    que conta a história de duas funcionárias públicas do 
                    Ceará que trabalham em uma secretaria especial que visa 
                    combater ameaças sobrenaturais. O roteiro é de Pablo 
                    Casado, com ilustrações de Talles Rodrigues e cores de 
                    Brendda Lima.`,
                image: {
                    background: 'http://localhost:8080/public/projects/mayaraAnnabelle/bg.webp',
                    main: 'http://localhost:8080/public/projects/mayaraAnnabelle/main.jpg'
                },
                creator: {
                    name: 'Gustavo Rosário',
                    username: 'gmastersupreme',
                    image: {
                        profile: 'http://localhost:8080/public/users/asuka.png'
                    }
                },
                bag: {
                    meta: 5000.00,
                    collected: 3848.00
                },
                category: 'sobrenatural'
            },
            {
                title: 'Dragon Ball Super',
                description: `Nam ultrices pretium purus, quis convallis 
                    ligula suscipit ac. Pellentesque vehicula nulla sit 
                    amet tincidunt blandit. Integer scelerisque eros a 
                    quam convallis faucibus. Integer rutrum nunc est. 
                    Praesent sed sapien sed dui ultrices tempor. Aliquam 
                    malesuada ultrices elit non dapibus. Praesent lacus 
                    elit, congue sit amet sodales vel, viverra vel lectus.`,
                image: {
                    background: 'http://localhost:8080/public/projects/dragonBall/bg.jpg',
                    main: 'http://localhost:8080/public/projects/dragonBall/main.jpg'
                },
                creator: {
                    name: 'Gustavo Rosário',
                    username: 'gmastersupreme',
                    image: {
                        profile: 'http://localhost:8080/public/users/gus.jpeg'
                    }
                },
                bag: {
                    meta: 2000.00,
                    collected: 1500.00
                },
                category: 'shonen'
            },
            {
                title: 'Boku no Hero',
                description: `Nam ultrices pretium purus, quis convallis 
                    ligula suscipit ac. Pellentesque vehicula nulla sit 
                    amet tincidunt blandit. Integer scelerisque eros a 
                    quam convallis faucibus. Integer rutrum nunc est. 
                    Praesent sed sapien sed dui ultrices tempor. Aliquam 
                    malesuada ultrices elit non dapibus. Praesent lacus 
                    elit, congue sit amet sodales vel, viverra vel lectus.`,
                image: {
                    background: 'http://localhost:8080/public/projects/bokuNoHero/bg.jpg',
                    main: 'http://localhost:8080/public/projects/bokuNoHero/main.jpg'
                },
                creator: {
                    name: 'Nadine Wegas',
                    username: 'nadinewegas',
                    image: {
                        profile: 'http://localhost:8080/public/users/nadine.jpg'
                    }
                },
                bag: {
                    meta: 2000.00,
                    collected: 500.00
                },
                category: 'shonen'
            },
            {
                title: 'Ashe: Mãe Guerreira edição especial #01',
                description: `Criada nas florestas selvagens do norte, 
                    Ashe é uma glacinata, uma guerreira dotada de uma 
                    conexão mágica com sua terra congelada – e sobrecarregada 
                    pelas expectativas fanáticas de sua mãe. Quando 
                    eles partem em uma perigosa busca pela verdade por 
                    trás de um mito antigo, os laços são quebrados, 
                    os segredos vêm à luz e Runeterra é mudada para 
                    sempre.`,
                image: {
                    background: 'http://localhost:8080/public/projects/lol/bg.jpg',
                    main: 'http://localhost:8080/public/projects/lol/main.jpeg'
                },
                creator: {
                    name: 'Stephany Tenório',
                    username: 'stebani',
                    image: {
                        profile: 'http://localhost:8080/public/users/ste.jpg'
                    }
                },
                bag: {
                    meta: 12000.00,
                    collected: 9345.00
                },
                category: 'jogos'
            },{
                title: '9 Horas',
                description: `"9 Horas (9時間) é um álbum de história em quadrinhos
                    , que conta a aventura de K e M. Ele é um ilustrador, e ela, 
                    uma designer. Durante sua primeira viagem pela Ásia, o casal 
                    se vê perdido num lugar estranho, tendo que enfrentar perigos 
                    criados por um antigo deus do caos, um Tengu. Ao passarem a 
                    primeira noite no hotel cápsula do aeroporto, a aventura 
                    surreal começa. Eles são jogados em versões paralelas de Tóquio 
                    a cada 9 horas, e perseguidos por criaturas da cultura pop e da 
                    mitologia japonesa. As realidades vão se entrelaçando e se confundindo 
                    mais e mais, até que eles chegam na fase final, onde terão que 
                    enfrentar o maior desafio de todos."`,
                image: {
                    background: 'http://localhost:8080/public/projects/9Horas/bg.jpg',
                    main: 'http://localhost:8080/public/projects/9Horas/main.jpg'
                },
                creator: {
                    name: 'Stephany Tenório',
                    username: 'stebani',
                    image: {
                        profile: 'http://localhost:8080/public/users/avatar.png'
                    }
                },
                bag: {
                    meta: 12000.00,
                    collected: 9345.00
                },
                category: 'aventura'
            }
        ];
    }

}