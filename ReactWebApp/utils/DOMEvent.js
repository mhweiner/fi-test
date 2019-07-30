import OrderedDict from 'js-ordered-dict';

class DOMEventClass {

  constructor() {

    this.map = new OrderedDict();

  }

  /**
   * Adds an event listener and returns the unique id
   * @param element
   * @param event
   * @param handler
   */
  addListener(element, event, handler) {

    let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    element.addEventListener(event, handler);

    this.map.set(id, {
      event: event,
      handler: handler,
      element: element
    });

    return id;
  }

  /**
   * Removes listener represented by id.
   * @param id
   */
  removeListener(id) {

    let listener = this.map.get(id);

    if (!listener) {

      throw `Listener '${id}' is not defined!`;

    }

    listener.element.removeEventListener(listener.event, listener.handler);
    this.map.remove(id);

  }
}

export const DOMEvent = new DOMEventClass();