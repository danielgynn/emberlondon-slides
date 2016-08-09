// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link,
  ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/app.css");

const images = {
  tomster: require("../assets/tomster.png"),
  lts: require('../assets/lts-tomster.png'),
  ember: require('../assets/emberjs.png'),
  selfie: require('../assets/self-circle.png'),
  zoey: require('../assets/zoey.png'),
  london: require('../assets/london-tomster.png'),
  repositive: require('../assets/repositive.png'),
  demo1: require('../assets/talk-demo01.png'),
  demo2: require('../assets/talk-demo02.png'),
  demo3: require('../assets/talk-demo03.png'),
  thom: require('../assets/thom.gif'),
  thom2: require('../assets/thom2.gif'),
  books: require('../assets/books-demo.gif')
};

preloader(images);

const theme = createTheme({
  primary: "#faf4f1",
  emberRed: "#d84a32",
  emberBlack: "#444444",
  helvetica: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="emberRed">
            <Image src={images.london.replace("/", "")} height="400px"/>
            <Heading size={2} fit caps lineHeight={1} textColor="primary">
              Ember.js Experience Report
            </Heading>
            <Link href="https://twitter.com/danielgynn">
              <Text bold caps textColor="emberBlack">@danielgynn</Text>
            </Link>
            <Text caps textColor="primary">Ember London - 11/08/16</Text>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Image src={images.selfie.replace("/", "")} height="150px"/>
            <Link href="https://twitter.com/danielgynn"><Text bold caps textColor="emberBlack">@danielgynn</Text></Link>
            <Text caps textColor="emberBlack">Junior Frontend Developer</Text>
            <Text caps textColor="emberBlack">🎓 → 💻 → 🐹</Text>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Image src={images.repositive.replace("/", "")} height="150px"/>
            <Appear><Text bold textColor="emberBlack">Platform for researchers to share and collaborate on genomic data</Text></Appear>
            <List>
              <Appear><ListItem><Text textColor="emberBlack">Existing Ember 1.13 app</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Small team - lots of responsibilities</Text></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading caps size={2} textColor="emberRed">Jumping into Ember</Heading>
            <List>
              <Appear><ListItem><Text textColor="emberBlack">Lack of JavaScript framework experience</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Fast release cycle - lots of outdated resources</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Strong opinions</Text></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading fit caps size={2} textColor="emberRed">Embracing the Conventions</Heading>
            <List>
              <ListItem><Appear><Text textColor="emberBlack">Difficult to understand, at first</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Generate Ember objects easily</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Strong project structure with Ember CLI</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Build complex apps without being an expert</Text></Appear></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Image src={images.thom2.replace("/", "")} height="450px"/>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading fit caps size={2} textColor="emberRed">Route-Driven Development</Heading>
            <List>
              <ListItem><Appear><Text textColor="emberBlack">Work closely with designers</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Build interfaces based on application state</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Great architecture with state-driven routes</Text></Appear></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica">
            <Image src={images.demo1.replace("/", "")} height="500px"/>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica">
            <Image src={images.demo2.replace("/", "")} height="500px"/>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica">
            <Image src={images.demo3.replace("/", "")} height="500px"/>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Text bold textColor="emberBlack">Make Assumptions</Text>
            <List>
              <ListItem><Appear><Text textColor="emberBlack">We need four nested routes:</Text></Appear></ListItem>
              <Appear>
                <CodePane
                  lang="js"
                  source={require("raw!../assets/code8.example")}
                  margin="20px auto"
                  textSize="18px"
                />
              </Appear>
              <ListItem><Appear><Text textColor="emberBlack">Build templates and controllers as expected</Text></Appear></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading fit caps size={2} textColor="emberRed">Data Down, Actions Up</Heading>
            <List>
              <ListItem><Appear><Text textColor="emberBlack">Navigate a nested component hierarchy</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Bubbling actions up several layers</Text></Appear></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Text bold textColor="emberBlack">Allow user to set book rating in books route</Text>
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/code1.example")}
                margin="20px auto"
                textSize="18px"
              />
            </Appear>
            <Appear>
              <CodePane
                lang="markup"
                source={require("raw!../assets/code2.example")}
                margin="20px auto"
                textSize="18px"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Text bold caps textColor="emberBlack">Build the Component</Text>
            <Appear>
              <CodePane
                lang="markup"
                source={require("raw!../assets/code3.example")}
                margin="20px auto"
                textSize="18px"
              />
            </Appear>
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/code4.example")}
                margin="20px auto"
                textSize="18px"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Image src={images.thom.replace("/", "")} height="350px"/>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Text bold textColor="emberRed">Send action up from component to controller</Text>
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/code7.example")}
                margin="20px auto"
                textSize="18px"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Text bold textColor="emberBlack">Set value in controller</Text>
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/code5.example")}
                margin="20px auto"
                textSize="18px"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading fit caps size={2} textColor="emberRed">Pass action to component call</Heading>
            <Appear>
              <CodePane
                lang="markup"
                source={require("raw!../assets/code6.example")}
                margin="20px auto"
                textSize="18px"
              />
            </Appear>
            <Appear><Image src={images.books.replace("/", "")} height="250px" margin="15px"/></Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading caps size={2} textColor="emberRed">Community</Heading>
            <List>
              <ListItem><Appear><Text textColor="emberBlack">Active & inclusive community</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Meetups and conferences</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Assisstance from add-on maintainers</Text></Appear></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading caps size={2} textColor="emberRed">Lessons Learned</Heading>
            <List>
              <ListItem><Appear><Text textColor="emberBlack">Trust the conventions</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Use state-driven URLs in designing UI</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Understand DDAU and component hierarchy</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Follow the community</Text></Appear></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Image src={images.zoey.replace("/", "")} height="350px" margin="15px"/>
            <Heading caps size={2} textColor="emberRed">Thanks!</Heading>
            <Link href="https://twitter.com/danielgynn">
              <Text bold caps textColor="emberBlack">@danielgynn</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
