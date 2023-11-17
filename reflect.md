# Reflection on Kowloon Rater Development

## Learning from MVP Architecture
- Adopted the Model-View-Presenter (MVP) pattern in preparation for a future transition to React.
- Focused on separating concerns: each major component has a corresponding view and presenter, facilitating interaction with the application's state.
- This approach contrasts with the traditional Model-View-Controller (MVC) pattern, emphasizing a more React-like structure.

## Challenges Faced
- Developed using pure vanilla JavaScript, CSS, and HTML without reliance on frameworks.
- Aimed to create a foundation that would ease the future conversion to React, which necessitated building robust state management and component systems from scratch.
- The process was intensive but provided a deep understanding of fundamental web development concepts.

## Managing Game Complexity
- The initial design included more complex features, such as cloud database integration.
- Due to time constraints, the game's data was confined to live within the browser.
- Although the development scope was ambitious, it aligned closely with my initial expectations given the chosen development tools.

## Final Product vs. Initial Design
- The final implementation is a streamlined version of the original vision, focusing on core functionalities.
- The simplification of certain aspects, like omitting cloud database deployment, was a pragmatic decision to manage development time and complexity.

## Utilization of AI Assistance
- Leveraged AI, particularly for guidance on component communication and best practices in web application development.
- Gained significant insights into the MVP pattern and its application in a JavaScript environment, largely through interactions with ChatGPT.
- The AI's role was primarily advisory, offering conceptual support, while the implementation of the game was carried out independently.