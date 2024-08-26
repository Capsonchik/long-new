import {Message} from "rsuite";

export const ErrorWarning = () => {
  return (
    <Message showIcon type="error" header="Ошибка!">
      Произошла ошибка, попробуйте обновить страницу
    </Message>
  );
};