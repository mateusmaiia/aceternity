import { gridItems } from '@/data/index'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

export function Grid() {
    return (
    <section id='about'>
        <BentoGrid className='w-full py-20'>
            {gridItems.map(({
                id,
                title,
                description,
                className,
                img,
                imgClassName,
                titleClassName,
                spareImg
            }) => (
                <BentoGridItem
                    id={id}
                    className={className}
                    key={id}
                    title={title}
                    description={description}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
    )
}

