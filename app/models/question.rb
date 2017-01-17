class Question < ApplicationRecord
  validates :title, presence: true
  belongs_to :author, class_name: "User", foreign_key: :user_id
  has_many :answers

  include PgSearch
  pg_search_scope :search_for,
    against: %i(title description),
    using: {tsearch: { highlight: { start_sel: '<strong>', stop_sel: '</strong>'}, prefix: true } }
end
