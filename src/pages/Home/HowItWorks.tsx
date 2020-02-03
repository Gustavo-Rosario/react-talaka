import * as React from 'react';

export default class HowItWorks extends React.Component<{},{}>{
    
    render(){
        return (
            <section id="howItWorks">
                <div className="wrapper">
                    <i className="fa fa-commenting" aria-hidden="true"></i>
                    <h1>O que é <b>financiamento coletivo?</b> </h1>

                    <div className="worksArea">
                        <div className="worksInfo">
                            <p><b>Financiamento coletivo</b> nada mais é do que o ato de <b>financiar</b> com algum valor projetos de artistas ou grupos que você acredita que merecem ganhar vida. E caso esses projetos cumpram suas metas, com a sua ajuda, eles finalmente podem sair do papel!</p>
                            <p> O financiamento coletivo no <b>Talaka</b> dá chance para que os novos artistas se lancem no mercado e os já conhecidos possam criar novos materiais com ajuda dos seus queridos fãs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}