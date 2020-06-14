require 'rails_helper'

RSpec.describe "properties/edit", type: :view do
  before(:each) do
    @property = assign(:property, Property.create!(
      user_id: 1,
      description: "MyText"
    ))
  end

  it "renders the edit property form" do
    render

    assert_select "form[action=?][method=?]", property_path(@property), "post" do

      assert_select "input[name=?]", "property[user_id]"

      assert_select "textarea[name=?]", "property[description]"
    end
  end
end
