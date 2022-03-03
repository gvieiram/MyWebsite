/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectChangeEvent } from '@mui/material';

import {
  Container,
  Button,
  ArrowSvg,
  ItemList,
  ItemsContainer,
  ItemsList,
} from './styles';

type LanguageProps = {
  id?: number;
  name?: string;
  value?: string;
  disabled?: boolean;
};

type RBRef = string & ((ref: Element | null) => void);

export function SelectMenu() {
  const { t, i18n } = useTranslation('navBar', { useSuspense: false });
  const languages: LanguageProps[] = t('languages');

  const [selectedItem, setSelectedItem] = useState<LanguageProps>({});
  const [isOpen, setIsOpen] = useState(false);
  const selectMenuRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  function handleClick(el: LanguageProps) {
    if (!el.disabled) {
      setSelectedItem({
        id: el.id,
        name: el.name,
        value: el.value,
        disabled: el.disabled,
      });

      i18n.changeLanguage(el.value);
    }
  }

  useEffect(() => {
    function handleSelectMenu(e: any) {
      if (!selectMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleSelectMenu);
  }, []);

  useEffect(() => {
    const lngResult = (lng: string) => {
      return languages.find(l => l.value === lng);
    };

    function defaultLanguage() {
      if (
        i18n.language.toLowerCase() === 'pt_br' ||
        i18n.language.toLowerCase() === 'pt-br'
      ) {
        return 'pt_br';
      }
      if (
        i18n.language.toLowerCase() === 'de-de' ||
        i18n.language.toLowerCase() === 'de'
      ) {
        return 'de';
      }
      return 'en';
    }

    i18n.changeLanguage(defaultLanguage());

    const lng = lngResult(defaultLanguage());

    if (lng?.disabled === true) {
      i18n.changeLanguage('en');
    }

    setSelectedItem({
      id: lng?.id,
      name: lng?.name,
      value: defaultLanguage(),
      disabled: false,
    });
  }, []);

  return (
    <Container>
      <Button
        ref={selectMenuRef as unknown as RBRef}
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem?.name}
        <ArrowSvg size={14} color="#fff" isActive={isOpen} />
      </Button>
      {isOpen && (
        <ItemsContainer>
          <ItemsList>
            {languages.map(el => (
              <ItemList
                key={el.id}
                value={el.value}
                onClick={() => handleClick(el)}
                role="option"
                isDisabled={el.disabled}
              >
                {el.name}
              </ItemList>
            ))}
          </ItemsList>
        </ItemsContainer>
      )}
    </Container>
  );
}
