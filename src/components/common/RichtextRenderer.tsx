import React from 'react'; 
 import cn from 'classnames';
import { NODE_IMAGE, render } from 'storyblok-rich-text-react-renderer';
import Image from 'next/image';
import Headline from '../Headline';
import ImageBlok from '../ImageBlok';
import MemberCard from '../MemberCard';

interface Props {
    content: any;
}
const RichtextRenderer:React.FC<Props> = React.memo(({ content }) => {
     return <div className={cn('')}> 
            {render(content, {
              blokResolvers: {
                Image: (blok: any) => <ImageBlok blok={blok} />,
                Headline: (blok: any) => <Headline blok={blok} />,
                Member: (blok: any) => <MemberCard member={blok} />,
              },
              nodeResolvers: {
                paragraph: (value) => (
                  <div className="my-2 py-2 text-justify text-sm font-light leading-6 tracking-wider text-black">
                    {value}
                  </div>
                ),
                [NODE_IMAGE]: (value, props) => {
                  return (
                    <div className="relative h-[400px] w-[300px]">
                      <Image
                        src={props.src || ""}
                        alt={props.alt || props.title}
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                  );
                },
              },
            })}
          
     </div>
})
export default RichtextRenderer