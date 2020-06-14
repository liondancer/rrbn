require 'rails_helper'

RSpec.describe "properties/show", type: :view do
  before(:each) do
    @property = assign(:property, Property.create!(
      user_id: 2,
      description: "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/2/)
    expect(rendered).to match(/MyText/)
  end
end
