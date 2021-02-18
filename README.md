[![Nest Logo](http://kamilmysliwiec.com/public/nest-logo.png)](http://kamilmysliwiec.com/)

You can use this repository to test if you can use Nest CQRS on AWS lambda.

### **TLDR: You can't**

No, it's not possible to do so because:
- Nest busses(command bus, event bus and query bus) are implemented as rxjs Observable stream
- Lambda internals do not await for Observables and `contextWaitForEmptyEventLoop` does nothing in this case
- After testing, it turned out that lambda quits before processing of some events
