import * as React from 'react';

export default class Footer extends React.Component<{},{}>{

    render(){
        return(
            <footer>
                <div className="wrapper">

                    <ul>
                        <li>Sobre</li>
                        <li>Projetos</li>
                        <li>Como funciona</li>
                        <li>FAQ</li>
                        <li>Dicas para campanha</li>
                        <li>Termos de Uso</li>
                    </ul>
                    <div className="footer">
                        <p>
                            Talaka &copy; 2020
                        </p>
                    </div>
                </div>
            </footer>
        )
    }

}