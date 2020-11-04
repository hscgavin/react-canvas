// reference : https://zhuanlan.zhihu.com/p/145449585

import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './Docker.module.css';
import chrome from './images/Chrome.png';
import drawing from './images/Drawing.png';
import terminal from './images/Terminal.png';

const dockList = [chrome, terminal, drawing];

interface Props {}

const Docker = (props: Props) => {
  const [defaultWidth] = useState(76);
  const [dockStyle] = useState({ height: defaultWidth });
  const dockRef = useRef<HTMLDivElement>(null);
  const getOffset = useCallback(
    (el: HTMLElement, offset: 'top' | 'left'): number => {
      const elOffset = offset === 'top' ? el.offsetTop : el.offsetLeft;
      if (el.offsetParent == null) {
        return elOffset;
      }
      return elOffset + getOffset(el.offsetParent as HTMLElement, offset);
    },
    []
  );

  const mousemove = useCallback(
    ({ clientX, clientY }) => {
      if (!dockRef.current) {
        return;
      }
      const imgList = dockRef.current.childNodes;
      for (let i = 0; i < imgList.length; i++) {
        const img = imgList[i] as HTMLImageElement;
        const x = img.offsetLeft + defaultWidth / 2 - clientX;
        const y =
          img.offsetTop +
          getOffset(dockRef.current, 'top') +
          img.offsetHeight / 2 -
          clientY;
        let imgScale =
          1 - Math.sqrt(x * x + y * y) / (imgList.length * defaultWidth);
        if (imgScale < 0.5) {
          imgScale = 0.5;
        }
        img.width = defaultWidth * 2 * imgScale;
      }
    },
    [defaultWidth, getOffset]
  );
  const mouseleave = useCallback(() => {
    if (!dockRef.current) {
      return;
    }
    const imgList = dockRef.current.childNodes;
    for (let i = 0; i < imgList.length; i++) {
      const img = imgList[i] as HTMLImageElement;
      img.width = defaultWidth;
    }
  }, [defaultWidth]);

  useEffect(() => {
    if (!dockRef.current) {
      return;
    }
    const dockBackground: HTMLDivElement = dockRef.current;
    dockBackground.addEventListener('mousemove', mousemove);
    dockBackground.addEventListener('mouseleave', mouseleave);
    return () => {
      dockBackground.removeEventListener('mousemove', mousemove);
      dockBackground.removeEventListener('mouseleave', mouseleave);
    };
  }, [mousemove, mouseleave]);

  return (
    <div ref={dockRef} style={dockStyle} className={styles.docker}>
      {dockList.map((item, index) => {
        return <img src={item} alt={item} key={index + item} />;
      })}
    </div>
  );
};

export default Docker;
