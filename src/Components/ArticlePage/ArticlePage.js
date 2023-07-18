import React from 'react'
import img from './file.png'
import cal from './calendar.png'
import folder from './folder.png'
import eye from './eye-open.png'
import dublicate from './duplicate.png'
import bookmark from './bookmark.png'

function ArticlePage() {
    return (
        <>
            {/* bg-[#fffdfa] */}

            <div className="flex justify-center  h-[500px] w-100 bg-yellow-300">

                <div className='h-100 w-[1200px] mt-3 bg-white justify-self-center '>
                    <div className="py-5 ">
                        <div className="flex ">

                            <div className='text-[2.125rem] leading-[2.5rem] font-[700]   float-left text-gray-600 bg-pink-100   w-5/6'>
                                On the Gradient Formula for learning Generative Models with Regularized Optimal Transport Costs
                            </div>
                            <div className="icon  float-right ml-[100px] w-1/6 pl-[100px]">
                                <img className='w-[40px]' src={img}></img>
                            </div>
                        </div>
                        <div className="py-1">

                            <span className="italic font-sans text-[1.25rem] leading-[1.5rem] ">
                                Tanguy Bosser, Souhaib Ben Taieb
                            </span>
                        </div>
                        <div className="a">
                            <span className="text-[.75rem] p-0">
                                <img className='w-[.875rem] inline mb-1' src={cal} ></img>
                                <span className="pl-1">
                                    Published:
                                </span>
                                17 Jul 2023 ,  Last Modified: 17 Jul 2023
                                <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src={folder} ></img>

                                Accepted by TMLR
                                <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src={eye} ></img>

                                Everyone
                                <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src={dublicate} ></img>

                                Revisons
                                <img className='w-[.875rem] inline mb-1 mr-1 ml-4' src={bookmark} ></img>

                                BibTex
                            </span>
                        </div>

                    </div>
                    <div className="text-[.75rem] leading-[1.125rem] mt-[-0.875rem]">
                        <span className="block">
                        <strong className='text-[#8c1b13]'> Abstract : </strong>
                         Variational inference with Gaussian mixture models (GMMs) enables learning of highly tractable yet multi-modal approximations of intractable target distributions with up to a few hundred dimensions. The two currently most effective methods for GMM-based variational inference, VIPS and iBayes-GMM, both employ independent natural gradient updates for the individual components and their weights. We show for the first time, that their derived updates are equivalent, although their practical implementations and theoretical guarantees differ. We identify several design choices that distinguish both approaches, namely with respect to sample selection, natural gradient estimation, stepsize adaptation, and whether trust regions are enforced or the number of components adapted. We argue that for both approaches, the quality of the learned approximations can heavily suffer from the respective design choices: By updating the individual components using samples from the mixture model, iBayes-GMM often fails to produce meaningful updates to low-weight components, and by using a zero-order method for estimating the natural gradient, VIPS scales badly to higher-dimensional problems. Furthermore, we show that information-geometric trust-regions (used by VIPS) are effective even when using first-order natural gradient estimates, and often outperform the improved Bayesian learning rule (iBLR) update used by iBayes-GMM. We systematically evaluate the effects of design choices and show that a hybrid approach significantly outperforms both prior works. Along with this work, we publish our highly modular and efficient implementation for natural gradient variational inference with Gaussian mixture models, which supports
                        different combinations of design choices, facilitates the reproduction of all our experiments, and may prove valuable for the practitioner.
                        </span>
                        <div className="block">
                        <strong className='text-[#8c1b13] font-[700]'> License : </strong>
                        Creative Commons Attribution 4.0 International (CC BY 4.0)
                        </div>
                        <strong className='text-[#8c1b13] font-[700]'> Submission Length : </strong>
                        Regular submission (no more than 12 pages of main content)
                    </div>

                </div>
            </div>
        </>
    )
}

export default ArticlePage
