import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.typography", module);
import { Typography } from "antd";

const { Paragraph } = Typography;

stories.addWithJSX("ellipsis", () => (
  <div>
    <Paragraph ellipsis>
      Ant Design, a design language for background applications, is refined by
      Ant UED Team. Ant Design, a design language for background applications,
      is refined by Ant UED Team. Ant Design, a design language for background
      applications, is refined by Ant UED Team. Ant Design, a design language
      for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team.
      Ant Design, a design language for background applications, is refined by
      Ant UED Team.
    </Paragraph>

    <Paragraph ellipsis={{ rows: 3, expandable: true }}>
      Ant Design, a design language for background applications, is refined by
      Ant UED Team. Ant Design, a design language for background applications,
      is refined by Ant UED Team. Ant Design, a design language for background
      applications, is refined by Ant UED Team. Ant Design, a design language
      for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team.
      Ant Design, a design language for background applications, is refined by
      Ant UED Team.
    </Paragraph>
  </div>
));
