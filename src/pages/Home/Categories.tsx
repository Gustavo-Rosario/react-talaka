import * as React from 'react';

export default class Categories extends React.Component<{},{}>{


    render(){
        return (
            <section id="categories">
                <div className="wrapper">
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <h1>Conheça as categorias!</h1>
                    <h2>
                        Saiba um pouco mais sobre as categorias disponíveis no Talaka.
                    </h2>
                    {/* <!--<ul id="catIcons">-->
                    <!--    <?php-->
                    <!--    foreach ($cats as $cat) {-->
                    <!--    ?>-->
                    <!--        <li data-link="<?=$cat->nm;?>">-->
                    <!--            <?= $cat->nm; ?>-->
                    <!--        </li>-->
                    <!--    <?php-->
                    <!--    }-->
                    <!--    ?>-->
                    <!--</ul>--> */}
                    {/* <?php
                        foreach ($cats as $key=>$cat) {
                    ?>
                        <div className="catInfo <?= explode("d",$key)[1] == (count($cats) - 1)? "last" : ((explode("d",$key)[1] == 0) ? "atual" :"");?>">
                            <div className='catCover' data-link="<?=$cat->nm;?>" style='background-image:url(/Talaka/resources/img/<?= $cat->img; ?>)' ></div>
                                <h3> <?= $cat->nm; ?> </h3>
                                <p>
                                    <?= $cat->ds; ?>
                                </p>
                                <a href="/explore/<?= urlencode($cat->nm);?>/1">Explorar categoria de <?= $cat->nm ?></a>
                        </div>
                    <?php
                    }
                    ?> */}
                    
                    
                </div>
            </section>
        )
    }

}
