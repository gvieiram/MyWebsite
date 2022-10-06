import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import './stylesDefault.css';
import { useTheme } from 'styled-components';

import { WorkIcon, SchoolIcon, Subtitle, Title, Text } from './styles';

export function TimeLine() {
  const { colors } = useTheme();
  const { t } = useTranslation('home', { useSuspense: false });
  const timelineElements = t('experience');

  return (
    <VerticalTimeline lineColor={colors.gray}>
      {timelineElements.map(element => {
        const isWorkIcon = element.icon === 'work';

        return (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName="date"
            iconStyle={{
              backgroundColor: isWorkIcon ? colors.purple_800 : colors.pink,
              boxShadow: `0 0 0 4px ${colors.background_card}, 0px 4px 9px rgba(0, 0, 0, 0.25)`,
            }}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            contentStyle={{
              backgroundColor: colors.background_card,
              borderTopWidth: 6,
              borderTopStyle: 'solid',
              borderTopColor: isWorkIcon ? colors.purple_800 : colors.pink,
            }}
            contentArrowStyle={{
              borderRightColor: colors.background_card,
              borderRightWidth: 9,
              marginTop: -5,
            }}
          >
            <Title>{element.title}</Title>
            <Subtitle>{element.location}</Subtitle>
            <Text>{element.description}</Text>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
