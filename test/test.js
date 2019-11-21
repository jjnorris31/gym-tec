import Login from '../src/views/Login';

function mountComponentWithProps (Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({
      propsData
    }).$mount();
  
    return vm.$el;
  }
  
  describe('Login.vue', () => {
    it('should be the correct login', () => {
      const headingData = mountComponentWithProps(Login, { exercises: 'squads' });
      console.log(headingData)
  
      expect(this.state.exercises).toEqual(exercises);
    });
  
    it('should have the correct title', () => {
      const headingData = mountComponentWithProps(Login, { title: 'Hola, JuanJo!' });
      const titleData = headingData.textContent;
  
      expect(titleData).toEqual('Hola, JuanJo!');
    });
  });


  import mutations from './mutations'

test('setItems updates state with items in payload', () => {
  const state = {
    items: []
  }
  const items = [{}, {}]
  mutations.setItems(state, { items })
  expect(state.items).toBe(items)
})

