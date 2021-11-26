import * as S from './Styled';

export default function Container(props) {
  return (
    <div className='container'>
      <S.ContainerTitle>{props.title}</S.ContainerTitle>
      <S.ContainerCards>
        {props.children}
      </S.ContainerCards>
    </div>
  )
}