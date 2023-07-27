const article = {
    article_id : "" ,
    heading: "On the Gradient Formula for learning Generative Models with Regularized Optimal Transport Costs",
    abstract: "Variational inference with Gaussian mixture models (GMMs) enables learning of highly tractable yet multi-modal approximations of intractable target distributions with up to a few hundred dimensions. The two currently most effective methods for GMM-based variational inference, VIPS and iBayes-GMM, both employ independent natural gradient updates for the individual components and their weights. We show for the first time, that their derived updates are equivalent, although their practical implementations and theoretical guarantees differ. We identify several design choices that distinguish both approaches, namely with respect to sample selection, natural gradient estimation, stepsize adaptation, and whether trust regions are enforced or the number of components adapted. We argue that for both approaches, the quality of the learned approximations can heavily suffer from the respective design choices: By updating the individual components using samples from the mixture model, iBayes-GMM often fails to produce meaningful updates to low-weight components, and by using a zero-order method for estimating the natural gradient, VIPS scales badly to higher-dimensional problems. Furthermore, we show that information-geometric trust-regions (used by VIPS) are effective even when using first-order natural gradient estimates, and often outperform the improved Bayesian learning rule (iBLR) update used by iBayes-GMM. We systematically evaluate the effects of design choices and show that a hybrid approach significantly outperforms both prior works. Along with this work, we publish our highly modular and efficient implementation for natural gradient variational inference with Gaussian mixture models, which supports different combinations of design choices, facilitates the reproduction of all our experiments, and may prove valuable for the practitioner.",
    published_dt: " 17 Jul 2024 ",
    last_modified: "17 Jul 2023",
    license: "Creative Commons Attribution 4.0 International (CC BY 4.0)",
    sub_len: " Regular submission (no more than 12 pages of main content)",
    code_url: "https://github.com/jaeminyoo/SSL-AD",
    Assigned_Action_Editor: "Charles Xu",
    sub_num: 1077,
    author : [

        {
            name: "Tanguy Bosser ,"
        },
        {
            name: "Souhaib Ben Taieb ,"
        },
        {
            name: "third author ,"
        },
        {
            name: "third author"
        },
        
    
    
    ]
    
}







export {
    article,
}